import {Text, View} from 'react-native';
import React from 'react';
import {CartCard, HeaderComp} from '../Components';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import Ripple from 'react-native-material-ripple';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const textStyles = 'justify-between items-center flex-row';

const MyCart = ({navigation}) => {
  const cartItem = useSelector(state => state.cart.items);

  // const [selected, setSelected] = React.useState(false);
  const array = new Array(6).fill(0).map((_, index) => {
    index;
  });
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
            <Ripple
              rippleContainerBorderRadius={30}
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                backgroundColor: theme.backgroundColor,
                padding: 10,
                elevation: 3,
                borderRadius: 30,
              }}>
              <ChevronLeftIcon color={theme.darkColor} size={'18'} />
            </Ripple>
          }
          apppend={<View className="w-10" />}
        />
        <Text className="px-2 text-lg font-semibold tracking-wide">
          12 Items
        </Text>
        <FlatList
          data={array}
          numColumns={1}
          renderItem={({item, index}) => <CartCard item={item} />}
        />
      </View>
      <View className="bg-white w-full h-1/3.5">
        <View className="p-4 gap-3">
          <View className={textStyles}>
            <Text className="text-base font-normal text-gray-500">
              SubTotal
            </Text>
            <Text className="text-base font-semibold text-black">$753.95</Text>
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
            <Text className="text-base font-semibold text-black">$807.95</Text>
          </View>
        </View>
        <Ripple
          onPress={() => {
            navigation.navigate('Checkout');
          }}
          rippleContainerBorderRadius={16}
          className="m-4 rounded-2xl h-14  justify-center items-center bg-primary">
          <Text className="text-center text-white text-xl font-semibold">
            Checkout
          </Text>
        </Ripple>
      </View>
    </>
  );
};

export default MyCart;
