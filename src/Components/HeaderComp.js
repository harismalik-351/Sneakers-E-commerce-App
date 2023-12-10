import {Text, View} from 'react-native';
import React from 'react';

const HeaderComp = ({
  title,
  apppend,
  containerStyles,
  prepend,
  inlineStyles,
}) => {
  return (
    <View
      className="justify-between mb-4 items-center flex-row"
      style={{...containerStyles}}>
      {prepend}
      <View>
        <Text
          style={{...inlineStyles}}
          className="text-3xl text-center font-bold tracking-wide ">
          {title}
        </Text>
      </View>
      {apppend}
    </View>
  );
};

export default HeaderComp;
