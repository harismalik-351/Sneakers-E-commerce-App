import {Image, Text, View} from 'react-native';
import React from 'react';
import {CheckIcon} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import Ripple from 'react-native-material-ripple';

const CartCard = ({item, isSelectted}) => {
  return (
    <View className="bg-white rounded-2xl h-24 my-1.5 mx-2 flex-row border border-primary justify-between items-center">
      <View className="mx-3 rounded-2xl bg-background">
        <Image
          style={{width: 80, height: 70}}
          source={require('../../assets/page1.png')}
        />
        <View className=" w-6 h-6 rounded-full absolute -bottom-2 right-0 justify-center bg-primary items-center">
          <Text className="text-white text-sm ">1</Text>
        </View>
      </View>
      <View className="flex-1">
        <Text
          lineBreakMode="tail"
          numberOfLines={1}
          className="text-base font-medium tracking-wide text-black">
          Nike Air Max 270
        </Text>
        <Text className="text-base font-semibold  text-black">$584.95</Text>
      </View>
      <Ripple
        onPress={() => {
          setSelected(!selected);
        }}
        rippleContainerBorderRadius={16}
        className={
          selected
            ? 'mx-3 rounded-2xl p-2 bg-primary'
            : 'mx-3 rounded-2xl p-2 bg-background'
        }>
        <CheckIcon
          color={selected ? theme.backgroundColor : theme.primery}
          strokeWidth={2}
        />
      </Ripple>
    </View>
  );
};

export default CartCard;
