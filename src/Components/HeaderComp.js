import {Text, View} from 'react-native';
import React from 'react';

const HeaderComp = ({title, apppend, prepend, inlineStyles}) => {
  return (
    <View className="justify-between mb-4 items-center flex-row">
      {prepend}
      <View>
        <Text
          style={{...inlineStyles}}
          className="text-3xl font-bold tracking-wide ">
          {title}
        </Text>
      </View>
      {apppend}
    </View>
  );
};

export default HeaderComp;
