import {Dimensions, Image, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../constants/theme';

const {width, height} = Dimensions.get('screen');
const DiscountBanners = ({}) => {
  return (
    <View className="bg-white h-28 rounded-2xl my-3 p-4 justify-between items-center flex-row">
      <View className=" flex-1">
        <Text className="text-xs font-normal text-black tracking-wide">
          Winter Sale
        </Text>
        <Text className="text-4xl font-extrabold tracking-widest text-parcent py-2">
          15% OFF
        </Text>
      </View>
      <View className="-rotate-12">
        <Image
          source={require('../../assets/page1.png')}
          style={{
            height: 125,
            position: 'absolute',
            right: -10,
            bottom: -15,
            width: 170,
          }}
          resizeMode="cover"
        />
      </View>
      <Image
        source={require('../../assets/stars.png')}
        style={{
          tintColor: theme.starTint + 33,
          width: 50,
          height: 50,
          position: 'absolute',
          bottom: 15,
          right: 5,
        }}
      />
      <Image
        source={require('../../assets/stars.png')}
        style={{
          tintColor: theme.starTint + 66,
          width: 50,
          height: 50,
          position: 'absolute',
          bottom: 1,
          left: 1,
        }}
      />
      <Image
        source={require('../../assets/star.png')}
        style={{
          tintColor: theme.primery + 33,
          width: 50,
          height: 50,
          position: 'absolute',
          top: 0,
          left: width * 0.45,
        }}
      />
      <View
        style={{transform: [{rotateX: '83deg'}], opacity: 0.3}}
        className="bg-zinc-600 w-28 h-12 rounded-full absolute -rotate-12 right-12 -bottom-4"
      />
    </View>
  );
};

export default DiscountBanners;
