import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HeaderComp} from '../Components';
import {ChevronLeftIcon, ShoppingBagIcon} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import Ripple from 'react-native-material-ripple';
import {useSelector} from 'react-redux';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const ProductScreen = ({navigation}) => {
  const product = useSelector(state => state.products.selectedProduct);
  console.log(product);

  const [Images, setImages] = React.useState(product?.image);

  return (
    <>
      <View className="flex-1 bg-background p-3.5">
        <HeaderComp
          title={'Product Detail'}
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
          apppend={
            <Ripple
              rippleContainerBorderRadius={30}
              style={{
                backgroundColor: theme.backgroundColor,
                padding: 10,
                borderRadius: 30,
                elevation: 3,
              }}>
              <ShoppingBagIcon
                strokeWidth={1.5}
                color={theme.darkColor}
                size={'20'}
              />
            </Ripple>
          }
        />

        <ScrollView>
          <View className="m-3">
            <Text className="w-9/12 text-black text-3xl font-bold tracking-wide">
              {product?.brand + ' ' + product?.name}
            </Text>
            <Text className="my-2 text-gray-500 text-base font-semibold tracking-wide">
              Men's Shoes
            </Text>
            <Text className="text-black font-bold tracking-wide text-2xl">
              ${product?.price}
            </Text>
            <Image style={{aspectRatio: 1}} source={{uri: Images}} />
            <FlatList
              scrollEnabled={false}
              horizontal
              data={product?.images}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    setImages(item);
                  }}
                  key={index}
                  className="justify-center items-center mx-1">
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 15,
                      borderWidth: 1,
                      marginHorizontal: 1,
                      borderColor: theme.primery,
                    }}
                    source={{uri: item}}
                  />
                </TouchableOpacity>
              )}
            />
            <View className="flex-row ">
              <Text>Available Sizes</Text>
              <FlatList
                horizontal
                data={product.sizes}
                renderItem={({item, index}) => (
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text className="text-sm font-bold text-black">{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <Text className="">{product.description}</Text>
          </View>
        </ScrollView>
      </View>
      <View></View>
    </>
  );
};

export default ProductScreen;
