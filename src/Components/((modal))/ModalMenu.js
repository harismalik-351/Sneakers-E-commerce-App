import {Pressable, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {theme} from '../../constants/theme';
import {
  CurrencyDollarIcon,
  FireIcon,
  LanguageIcon,
} from 'react-native-heroicons/outline';

const touchable = 'items-center py-2 flex-row gap-2';

const ModalMenu = ({isVisible, onBackdropPress}) => {
  return (
    <Modal
      onBackdropPress={onBackdropPress}
      useNativeDriver={true}
      backdropColor="tansparent"
      animationIn={'flash'}
      animationOut={'flash'}
      animationOutTiming={140}
      animationInTiming={120}
      coverScreen={false}
      isVisible={isVisible}>
      <View
        style={{
          padding: 15,
          borderWidth: 0.5,
          borderColor: theme.primery,
          position: 'absolute',
          top: '15%',
          borderRadius: 10,
          backgroundColor: 'white',
          width: '40%',
          height: '25%',
          alignSelf: 'flex-end',
        }}>
        <Text className="text-center py-2 text-base text-black tracking-wide font-semibold">
          Filter
        </Text>
        <Pressable onPress={() => {}} className={touchable}>
          <LanguageIcon color={theme.primery} size={20} />
          <Text>Name</Text>
        </Pressable>
        <Pressable onPress={() => {}} className={touchable}>
          <CurrencyDollarIcon color={'green'} size={20} />
          <Text>Price</Text>
        </Pressable>
        <Pressable onPress={() => {}} className={touchable}>
          <FireIcon color={'red'} size={20} />
          <Text>Popular</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default ModalMenu;
