import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {
  CheckIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from 'react-native-heroicons/outline';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../constants/theme';

const CartCard = ({
  item,
  increasePress,
  decresePress,
  deletePress,
  updateTotalPrice,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const rightView = () => {
    return (
      <TouchableNativeFeedback onPress={deletePress}>
        <View className="justify-center items-center mx-2 self-center p-4 rounded-2xl h-24 bg-red-600">
          <TrashIcon color={'#fff'} size={'25'} />
        </View>
      </TouchableNativeFeedback>
    );
  };

  const leftView = () => {
    return (
      <View className="bg-primary justify-center items-center mx-2 self-center rounded-2xl h-24">
        <TouchableNativeFeedback onPress={increasePress}>
          <View style={styles.Button}>
            <PlusIcon color={'#fff'} size={'20'} />
          </View>
        </TouchableNativeFeedback>
        <View style={styles.border} />
        <TouchableNativeFeedback onPress={decresePress}>
          <View style={styles.Button}>
            <MinusIcon color={'#fff'} size={'20'} />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  const handleCheckPress = () => {
    const isSelected = selectedItems.some(
      selectedItem => selectedItem.item.id === item.id,
    );

    if (isSelected) {
      setSelectedItems(prevSelectedItems =>
        prevSelectedItems.filter(
          selectedItem => selectedItem.item.id !== item.id,
        ),
      );
    } else {
      setSelectedItems(prevSelectedItems => [
        ...prevSelectedItems,
        {item, quantity: item.quantity, price: item.price * item.quantity},
      ]);
    }

    const newTotalPrice = selectedItems.reduce(
      (total, selectedItem) => total + selectedItem.price,
      0,
    );
    updateTotalPrice(newTotalPrice);
  };

  return (
    <Swipeable renderLeftActions={leftView} renderRightActions={rightView}>
      <View className="bg-white rounded-xl h-24 my-1.5 mx-2 flex-row border border-primary justify-between items-center">
        <View className="mx-3 rounded-2xl bg-background">
          <Image
            style={{width: 80, borderRadius: 15, height: 70}}
            source={{uri: item?.image}}
          />
          <View className="w-6 h-6 rounded-full absolute -bottom-2 right-0 justify-center bg-primary items-center">
            <Text className="text-white text-sm">{item?.quantity}</Text>
          </View>
        </View>
        <View className="flex-1">
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            className="text-base font-medium tracking-wide text-black">
            {item?.name}
          </Text>
          <Text className="text-base font-semibold text-black">
            $ {item?.price}
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleCheckPress}
          style={{
            backgroundColor:
              selectedItems.findIndex(
                selectedItem => selectedItem.item.id === item.id,
              ) !== -1
                ? theme.primery
                : '#00000005',
          }}
          className="mx-3 p-2 rounded-full">
          <CheckIcon color={'#000'} />
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  Button: {
    padding: 11,
    paddingLeft: 17,
    paddingRight: 17,
  },
  border: {
    borderWidth: 0.8,
    borderColor: '#ffffff',
    width: '70%',
  },
});
