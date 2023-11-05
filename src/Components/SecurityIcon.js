import React from 'react';
import Ripple from 'react-native-material-ripple';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/outline';

const SecurityIcon = ({onPress, setIcon, color, size}) => {
  return (
    <Ripple styles={{padding: 10}} onPress={onPress}>
      {setIcon ? (
        <EyeSlashIcon color={color} size={size} />
      ) : (
        <EyeIcon color={color} size={size} />
      )}
    </Ripple>
  );
};

export default SecurityIcon;
