import {Dimensions, Image, Text, View} from 'react-native';
import React from 'react';
import {HeartIcon, PlusIcon} from 'react-native-heroicons/outline';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {productSlice} from '../ReduxStore/productSlice';
import {cartSlice} from '../ReduxStore/addToCart';

const {width, height} = Dimensions.get('screen');

const ShoesCard = ({item, favourite}) => {
  const addToCart = product => {
    dispatch(cartSlice.actions.addCartItem({product}));
  };

  const pressOnProduct = () => {
    dispatch(productSlice.actions.setSelectedProduct(item.id));
    navigation.navigate('Product');
  };
  const dispatch = useDispatch();

  const navigation = useNavigation();
  return (
    <View
      key={item?.id}
      style={{width: width * 0.43}}
      className="flex-1 bg-white my-3 mx-1 rounded-2xl">
      <View className="px-3 py-2">
        <TouchableOpacity className=" justify-center items-center w-8 h-6 rounded-full">
          <HeartIcon strokeWidth={2} color={'#000'} size={'20'} />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              pressOnProduct();
            }}
            className=" justify-center items-center round p-1 py-2">
            {item?.image || item?.imageURL ? (
              <Image
                style={{
                  width: 140,
                  backgroundColor: '#EBEEF0',
                  borderRadius: 20,
                  height: 105,
                }}
                source={{uri: item?.image || item?.imageURL}}
              />
            ) : null}
            {/* <View
              style={{transform: [{rotateX: '83deg'}], opacity: 0.3}}
              className="bg-zinc-300 w-16 h-5 rounded-full relative -rotate-12 left-2 bottom-0"
            /> */}
          </TouchableOpacity>
        </View>
        <Text
          style={{fontSize: 12, fontWeight: '600'}}
          className="text-primary  font-medium">
          {item?.brand}
        </Text>
        <Text
          numberOfLines={1}
          style={{fontSize: 13, fontWeight: '400'}}
          className="text-black font-normal tracking-wide">
          {item?.name}
        </Text>
      </View>
      <View
        className=" flex-row justify-between items-center "
        // style={{width: width * 0.429}}>
      >
        <Text
          style={{paddingBottom: favourite ? 10 : 0}}
          className="px-3 text-black text-sm font-semibold">
          ${item?.price}
        </Text>

        {favourite ? (
          <View className="w-24 items-center pb-2 justify-center flex-row gap-2">
            <View className="w-3 h-3 bg-red-600 rounded-full" />
            <View className="w-3 h-3 bg-blue-600 rounded-full" />
            <View className="w-3 h-3 bg-gray-800 rounded-full" />
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              addToCart(item);
            }}
            className="bg-primary justify-center items-center w-10 h-10 rounded-tl-2xl rounded-br-2xl ">
            <PlusIcon color={theme.backgroundColor} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default React.memo(ShoesCard);
