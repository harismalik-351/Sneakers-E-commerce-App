import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HeartIcon, PlusIcon} from 'react-native-heroicons/outline';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../constants/theme';

const {width, height} = Dimensions.get('screen');

const ShoesCard = ({title, price, image, favourite, addToCart}) => {
  return (
    <View
      style={{width: width * 0.43}}
      className="flex-1 bg-white my-3 mx-1 rounded-2xl">
      <View className="px-3 py-2">
        <View>
          <TouchableOpacity className="py-2">
            <HeartIcon strokeWidth={2} color={'#000'} size={'20'} />
          </TouchableOpacity>
          <View className=" justify-center items-center pb-2">
            <Image
              style={{width: 140, height: 105}}
              source={require('../../assets/page1.png')}
            />
            <View
              style={{transform: [{rotateX: '83deg'}], opacity: 0.3}}
              className="bg-zinc-300 w-16 h-12 rounded-full absolute -rotate-12 left-2 -bottom-4"
            />
          </View>
        </View>
        <Text
          style={{fontSize: 12, fontWeight: '600'}}
          className="text-primary  font-medium">
          BEST SELLER
        </Text>
        <Text
          style={{fontSize: 16, fontWeight: '400'}}
          className="text-black font-normal tracking-wide">
          Nike Jordan
        </Text>
      </View>
      <View
        className=" flex-row justify-between items-center "
        style={{width: width * 0.429}}>
        <Text
          style={{paddingBottom: favourite ? 10 : 0}}
          className="px-3 text-black text-sm font-semibold">
          $300.00
        </Text>

        {favourite ? (
          <View className="w-24 items-center pb-2 justify-center flex-row gap-2">
            <View className="w-3 h-3 bg-red-600 rounded-full" />
            <View className="w-3 h-3 bg-blue-600 rounded-full" />
            <View className="w-3 h-3 bg-gray-800 rounded-full" />
          </View>
        ) : (
          <TouchableOpacity className="bg-primary justify-center items-center w-10 h-10 rounded-tl-2xl rounded-br-2xl ">
            <PlusIcon color={theme.backgroundColor} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default React.memo(ShoesCard);

const styles = StyleSheet.create({});