import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {HeaderComp, ShoesCard} from '../Components';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import Ripple from 'react-native-material-ripple';
import {FlatList} from 'react-native-gesture-handler';

const Favourite = () => {
  const array = new Array(20).fill(0).map((_, index) => {
    index;
  });

  return (
    <View className="flex-1 bg-background p-3">
      <HeaderComp
        title={'Favoirute'}
        inlineStyles={{
          fontSize: 18,
          fontWeight: '600',
        }}
        prepend={
          <Ripple
            rippleContainerBorderRadius={30}
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
            <HeartIcon strokeWidth={1.5} color={theme.darkColor} size={'20'} />
          </Ripple>
        }
      />
      <FlatList
        data={array}
        numColumns={2}
        renderItem={({item, index}) => <ShoesCard favourite={true} />}
      />
    </View>
  );
};

export default memo(Favourite);
