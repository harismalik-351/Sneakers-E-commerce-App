import React from 'react';
import {View} from 'react-native';
import Ripple from 'react-native-material-ripple';

const RippleButton = ({innerStyles, Children, onPress}) => {
  return (
    <Ripple
      rippleColor={'#0D6EFD'}
      rippleCentered={true}
      rippleOpacity={1}
      rippleContainerBorderRadius={20}
      onPress={onPress}
      rippleDuration={400}>
      <View
        className="w-11 h-11 items-center justify-center rounded-full"
        style={{backgroundColor: '#F7F7F9'}}>
        {Children}
      </View>
    </Ripple>
  );
};

export default RippleButton;
