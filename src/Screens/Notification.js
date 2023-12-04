import {View} from 'react-native';
import React from 'react';
import {HeaderComp} from '../Components';
import {ChevronLeftIcon, TrashIcon} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import Ripple from 'react-native-material-ripple';

const Notification = ({navigation}) => {
  return (
    <View className="flex-1 bg-background p-3">
      <HeaderComp
        title={'Notifications'}
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
        apppend={
          <Ripple
            rippleContainerBorderRadius={30}
            style={{
              backgroundColor: theme.backgroundColor,
              padding: 10,
              borderRadius: 30,
              elevation: 3,
            }}>
            <TrashIcon strokeWidth={1.5} color={theme.darkColor} size={'20'} />
          </Ripple>
        }
      />
    </View>
  );
};

export default Notification;
