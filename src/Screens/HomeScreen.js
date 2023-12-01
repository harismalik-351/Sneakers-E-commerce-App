import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import {DiscountBanners, HeaderComp, ModalMenu, ShoesCard} from '../Components';
import {
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native-gesture-handler';
import {ShoesList} from '../constants/shoelist';
import data from '../constants/data.json';

const HomeScreen = ({navigation}) => {
  const [selected, setSelected] = React.useState('All Shoes');
  const [visible, setVisible] = React.useState(true);

  const handleFilterPress = () => {
    setVisible(!visible);
  };

  return (
    <>
      <ModalMenu
        onBackdropPress={() => {
          handleFilterPress();
        }}
        isVisible={!visible}
      />
      <ScrollView
        scrollEventThrottle={20}
        className="flex-1 p-5"
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
          <Pressable
            onPress={() => {
              navigation.navigate('Search');
            }}
            className="items-center flex-row bg-white flex-1 p-3 rounded-xl mr-2">
            <MagnifyingGlassIcon
              strokeWidth={2}
              size={'25'}
              color={theme.secondaryDark}
            />
            <Text className="text-sm font-semibold text-gray-500 tracking-wide mx-3">
              Looking For Shoes
            </Text>
          </Pressable>
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
                    ? 'px-6 py-3 my-4 rounded-lg  mx-2 bg-primary '
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
            initialNumToRender={30}
            horizontal
            backfaceVisibility={'hidden'}
            legacyImplementation={true}
            showsHorizontalScrollIndicator={false}
            data={data.filter(
              item => selected === 'All Shoes' || item.category === selected,
            )}
            renderItem={({item, index}) => (
              <ShoesCard item={item} favourite={false} />
            )}
          />
          <View className="mx-2 my-1 flex-row justify-between items-center">
            <Text className="text-lg  font-medium">New Arrivals</Text>
            <TouchableOpacity activeOpacity={0.4}>
              <Text className="text-sm text-primary font-bold">See all</Text>
            </TouchableOpacity>
          </View>
          <DiscountBanners />
        </View>
        <FlatList
          initialNumToRender={30}
          legacyImplementation={true}
          scrollEnabled={false}
          contentContainerStyle={{paddingBottom: 20}}
          data={data}
          numColumns={2}
          renderItem={({item, index}) => (
            <ShoesCard item={item} bestSellers={false} favourite={false} />
          )}
        />
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
