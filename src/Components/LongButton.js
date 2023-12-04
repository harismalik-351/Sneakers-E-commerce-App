import {Text} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
const LongButton = ({onPress, title, backgroundColor, color, Childred}) => {
  return (
    <Ripple
      rippleColor={'#fff'}
      onPress={onPress}
      style={{marginTop: 25, backgroundColor: backgroundColor}}
      className="h-14 flex-row rounded-2xl justify-center items-center">
      {Childred}

      <Text
        style={{color: color}}
        className="tracking-wide text-sm font-semibold">
        {title}
      </Text>
    </Ripple>
  );
};

export default LongButton;
