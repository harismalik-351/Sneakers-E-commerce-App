import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import React from 'react';
import {MinusIcon, PlusIcon, TrashIcon} from 'react-native-heroicons/outline';

import {Swipeable} from 'react-native-gesture-handler';

const CartCard = ({item, increasePress, decresePress, deletePress}) => {
  const rightView = () => {
    return (
      <TouchableNativeFeedback onPress={deletePress}>
        <View className="justify-center items-center mx-2 self-center p-4 rounded-2xl h-24 bg-red-500">
          <TrashIcon color={'#fff'} size={'25'} />
        </View>
      </TouchableNativeFeedback>
    );
  };
  const leftView = () => {
    return (
      <View className="bg-primary justify-center items-center mx-2  self-center rounded-2xl h-24">
        <TouchableNativeFeedback onPress={increasePress}>
          <View style={styles.Button}>
            <PlusIcon color={'#fff'} size={'25'} />
          </View>
        </TouchableNativeFeedback>
        <View style={styles.border} />
        <TouchableNativeFeedback onPress={decresePress}>
          <View style={styles.Button}>
            <MinusIcon color={'#fff'} size={'25'} />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return (
    <Swipeable renderLeftActions={leftView} renderRightActions={rightView}>
      <View className="bg-white rounded-xl h-24 my-1.5 mx-2 flex-row border border-primary justify-between items-center">
        <View className="mx-3 rounded-2xl bg-background">
          <Image
            style={{width: 80, height: 70}}
            source={{uri: item?.product?.image}}
          />
          <View className=" w-6 h-6 rounded-full absolute -bottom-2 right-0 justify-center bg-primary items-center">
            <Text className="text-white text-sm ">
              {item?.product?.quantity}
            </Text>
          </View>
        </View>
        <View className="flex-1">
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            className="text-base font-medium tracking-wide text-black">
            {item?.product?.name}
          </Text>
          <Text className="text-base font-semibold  text-black">
            {item?.product?.price}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  Button: {
    padding: 11,
    paddingLeft: 15,
    paddingRight: 15,
  },
  border: {
    borderWidth: 0.8,
    borderColor: '#ffffff88',
    width: '70%',
  },
});
