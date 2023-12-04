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

  return (
    <View className="flex-1 bg-background p-4">
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
            ${product.price}
          </Text>

          <Image source={{uri: product?.image}} />
          <FlatList
            data={product?.images}
            renderItem={({item, index}) => (
              <View key={index} className="w-10 h-10 bg-white mx-3">
                <Image style={{width: 40, height: '40'}} source={{uri: item}} />
              </View>
            )}
          />
          <View className="flex-row ">
            <Text>Available Sizes</Text>
            <FlatList
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
  );
};

export default ProductScreen;
