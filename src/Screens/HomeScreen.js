import {Image, StyleSheet, FlatList, Text, View} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import {InputField} from '../Components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ShoesList} from '../constants/shoelist';
const HomeScreen = () => {
  return (
    <View
      className="flex-1 p-5 "
      style={{backgroundColor: theme.secondaryBackground}}>
      <View className="justify-between mb-4 items-center flex-row">
        <Ripple
          rippleContainerBorderRadius={30}
          style={{
            padding: 10,
            borderRadius: 30,
          }}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/barIcon.png')}
          />
        </Ripple>
        <View>
          <Text className="text-3xl font-bold tracking-wide">Explore</Text>
        </View>
        <Ripple
          rippleContainerBorderRadius={30}
          style={{
            backgroundColor: theme.backgroundColor,
            padding: 10,
            borderWidth: 0.5,
            borderColor: theme.primery,
            borderRadius: 30,
          }}>
          <ShoppingBagIcon
            strokeWidth={1.5}
            color={theme.darkColor}
            size={'23'}
          />
        </Ripple>
      </View>
      <View className="justify-between items-center flex-row">
        <InputField
          innerStyles={{width: '100%'}}
          iconStyle={{paddingRight: 20}}
          prependChild={
            <MagnifyingGlassIcon
              strokeWidth={2}
              size={'25'}
              color={theme.secondaryDark}
            />
          }
          placeholder={'Looking for shoes'}
          containerStyles={{
            flex: 1,
            marginRight: 10,
            backgroundColor: theme.backgroundColor,
          }}
        />
        <Ripple
          style={{
            backgroundColor: theme.primery,
            padding: 10,
            borderRadius: 30,
          }}>
          <AdjustmentsHorizontalIcon
            color={theme.backgroundColor}
            size={'28'}
          />
        </Ripple>
      </View>
      <View className="my-3.5">
        <Text className="text-xl font-semibold tracking-wide">
          Select Category
        </Text>
        <FlatList
          horizontal
          fadingEdgeLength={1000}
          data={ShoesList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              className="px-6 py-3 my-4 rounded-lg bg-white mx-2"
              key={item.id}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
