import {View} from 'react-native';
import React from 'react';
import {HeaderComp} from '../Components';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import Ripple from 'react-native-material-ripple';

const CheckOut = ({navigation}) => {
  return (
    <View className="flex-1 bg-background p-3">
      <HeaderComp
        title={'Checkout'}
        inlineStyles={{
          fontSize: 18,
          fontWeight: '600',
        }}
        prepend={
          <Ripple
            rippleContainerBorderRadius={30}
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: theme.backgroundColor,
              padding: 10,
              elevation: 3,
              borderRadius: 30,
            }}>
            <ChevronLeftIcon color={theme.darkColor} size={'18'} />
          </Ripple>
        }
        apppend={<View className="w-10" />}
      />
    </View>
  );
};

export default CheckOut;
