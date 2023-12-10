import {Text, View} from 'react-native';
import React from 'react';
import {CartCard, HeaderComp} from '../Components';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {useCart} from '../AsyncStorage/cartStorage';

const textStyles = 'justify-between items-center flex-row';

const MyCart = () => {
  const {cart, removeFromCart, increaseQuantity, decreaseQuantity} = useCart();

  const navigation = useNavigation();

  const handleRemoveFromCart = id => {
    removeFromCart(id); // Assuming you're passing the item ID
  };

  const handleIncreaseQuantity = id => {
    increaseQuantity(id); // Assuming you're passing the item ID
  };
  const handleDecreaseQuantity = id => {
    decreaseQuantity(id); // Assuming you're passing the item ID
  };

  const [totalPrice, setTotalPrice] = React.useState(0);

  const updateTotalPrice = newTotalPrice => {
    setTotalPrice(newTotalPrice);
    console.log(newTotalPrice);
  };

  return (
    <>
      <View className="flex-1 bg-background px-3 pt-3">
        <HeaderComp
          title={'My Cart'}
          inlineStyles={{
            fontSize: 18,
            fontWeight: '600',
          }}
          prepend={
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                backgroundColor: theme.backgroundColor,
                padding: 12,
                elevation: 3,
                borderRadius: 30,
              }}>
              <ChevronLeftIcon color={theme.darkColor} size={'18'} />
            </TouchableOpacity>
          }
          apppend={<View className="w-10" />}
        />
        <Text className="px-2 text-lg font-semibold tracking-wide">
          {cart.length} Items
        </Text>
        {cart.length > 0 ? (
          <FlatList
            data={cart}
            numColumns={1}
            renderItem={({item}) => (
              <CartCard
                item={item}
                increasePress={() => {
                  handleIncreaseQuantity(item.id);
                }}
                deletePress={() => {
                  handleRemoveFromCart(item.id);
                }}
                decresePress={() => {
                  handleDecreaseQuantity(item.id);
                }}
                updateTotalPrice={updateTotalPrice}
              />
            )}
          />
        ) : (
          <View className="flex-1 justify-center mb-36 ">
            <LottieView
              loop
              autoPlay
              style={{aspectRatio: 1}}
              source={require('../../assets/lottieAnimation/cart.json')}
            />
          </View>
        )}
      </View>
      {cart.length > 0 ? (
        <View className="bg-white w-full h-1/3.5">
          <View className="p-4 gap-3">
            <View className={textStyles}>
              <Text className="text-base font-normal text-gray-500">
                SubTotal
              </Text>
              <Text className="text-base font-semibold text-black">
                $753.95
              </Text>
            </View>
            <View className={textStyles}>
              <Text className="text-base font-normal text-gray-500">
                Delivery
              </Text>
              <Text className="text-base font-semibold text-black">$53.95</Text>
            </View>
            <View className="border border-gray-500 border-dashed" />
            <View className={textStyles}>
              <Text className="text-base font-normal text-gray-500">Total</Text>
              <Text className="text-base font-semibold text-black">
                $807.95
              </Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('Checkout');
            }}
            className="m-4 rounded-2xl h-14  justify-center items-center bg-primary">
            <Text className="text-center text-white text-xl font-semibold">
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
    </>
  );
};

export default MyCart;
