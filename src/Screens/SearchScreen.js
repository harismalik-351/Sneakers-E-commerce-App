import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import {HeaderComp, InputField} from '../Components';
import {
  ChevronLeftIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';

const SearchScreen = ({navigation}) => {
  const [search, setSearch] = React.useState('');
  return (
    <View className="flex-1 bg-background p-3">
      <HeaderComp
        title={'Search'}
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
      <InputField
        prependChild={
          <MagnifyingGlassIcon
            color={theme.darkColor}
            strokeWidth={2}
            size={'23'}
          />
        }
        value={search}
        onChangeText={text => {
          setSearch(text);
        }}
        placeholder={'Search Your Shoes'}
        innerStyles={{flex: 1, marginLeft: 10}}
        containerStyles={{
          backgroundColor: theme.backgroundColor,
          marginHorizontal: 8,
          elevation: 3,
        }}
      />
    </View>
  );
};

export default SearchScreen;
