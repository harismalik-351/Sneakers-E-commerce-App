import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import {
  DiscountBanners,
  FilterModal,
  HeaderComp,
  InputField,
  ShoesCard,
} from '../Components';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {ShoesList} from '../constants/shoelist';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [selected, setSelected] = React.useState('All Shoes');

  const navigation = useNavigation();

  navigation.setOptions(() => ({
    navigationBarColor: '#fff',
  }));

  const data = new Array(10).fill(0).map((_, index) => {
    index;
  });

  const filterRef = React.useRef(null);

  const handleFilterPress = () => {
    filterRef?.current?.present();
  };

  return (
    <>
      <FilterModal ref={filterRef} />
      <View
        className="flex-1 p-5 "
        style={{backgroundColor: theme.secondaryBackground}}>
        <HeaderComp
          title={'Explore'}
          prepend={
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
          }
          apppend={
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
          }
        />
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
            onPress={() => {
              handleFilterPress();
            }}
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
            fadingEdgeLength={100}
            backfaceVisibility={'hidden'}
            legacyImplementation={true}
            showsHorizontalScrollIndicator={false}
            data={ShoesList}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  setSelected(item.name);
                }}
                className={
                  selected === item.name
                    ? 'px-6 py-3 my-4 rounded-lg mx-2 bg-primary '
                    : 'px-6 py-3 my-4 rounded-lg bg-white mx-2'
                }
                style={{borderWidth: 1, borderColor: theme.primery}}
                key={item.id}>
                <Text
                  className={
                    selected === item.name
                      ? 'text-white text-sm font-semibold'
                      : 'text-gray-500 text-sm font-medium'
                  }>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
          <View className="mx-2 flex-row justify-between items-center">
            <Text className="text-lg  font-medium">Popular Shoes</Text>
            <TouchableOpacity activeOpacity={0.4}>
              <Text className="text-sm text-primary font-bold">See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            backfaceVisibility={'hidden'}
            legacyImplementation={true}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item, index}) => <ShoesCard />}
          />
          <View className="mx-2 my-1 flex-row justify-between items-center">
            <Text className="text-lg  font-medium">New Arrivals</Text>
            <TouchableOpacity activeOpacity={0.4}>
              <Text className="text-sm text-primary font-bold">See all</Text>
            </TouchableOpacity>
          </View>
          <DiscountBanners />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
