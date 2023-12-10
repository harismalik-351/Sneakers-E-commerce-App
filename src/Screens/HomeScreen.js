import {
  Image,
  Platform,
  Pressable,
  Text,
  ToastAndroid,
  UIManager,
  View,
} from 'react-native';
import React from 'react';
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
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {useGetProductsQuery} from '../ReduxStore/apiSlice';

const HomeScreen = ({navigation}) => {
  React.useEffect(() => {
    if (data?.length > 0) {
      setLoading(false);
    }
  }, []);

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  //
  //
  //
  const [selected, setSelected] = React.useState('All Shoes');
  const [Loading, setLoading] = React.useState(true);
  const [visible, setVisible] = React.useState(true);
  const product = useSelector(state => state?.products?.product);
  const popular = useSelector(state => state?.popular?.product);

  const {data, isLoading, error} = useGetProductsQuery();

  // const product = data?.data;
  const handleFilterPress = () => {
    setVisible(!visible);
  };

  if (isLoading) {
    return (
      <View className="flex items-center m-6 justify-center">
        <LottieView
          source={require('../../assets/lottieAnimation/animation.json')}
          style={{width: 50, height: 50}}
          autoPlay
          loop
        />
      </View>
    );
  }

  if (error) {
    ToastAndroid.showWithGravityAndOffset(
      'Network Connection Error',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }

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
          apppend={<View className="w-10" />}
          prepend={<View className="w-10" />}
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
          <TouchableOpacity
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
          </TouchableOpacity>
        </View>
        <View className="my-3.5">
          <Text className="text-xl font-semibold tracking-wide">
            Select Category
          </Text>
          <FlatList
            horizontal
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
          {Loading ? (
            <View className="flex items-center m-6 justify-center">
              <LottieView
                source={require('../../assets/lottieAnimation/animation.json')}
                style={{width: 25, height: 25}}
                autoPlay
                loop
              />
            </View>
          ) : (
            <FlatList
              horizontal
              renderToHardwareTextureAndroid={true}
              legacyImplementation={true}
              showsHorizontalScrollIndicator={false}
              data={popular.filter(
                item => selected === 'All Shoes' || item.category === selected,
              )}
              renderItem={({item}) => <ShoesCard item={item} />}
              ListHeaderComponent={() => {
                if (Loading) {
                  return (
                    <View className="flex items-center m-6 justify-center">
                      <LottieView
                        source={require('../../assets/lottieAnimation/animation.json')}
                        style={{width: 25, height: 25}}
                        autoPlay
                        loop
                      />
                    </View>
                  );
                }
                return null;
              }}
            />
          )}

          <View className="mx-2 my-1 flex-row justify-between items-center">
            <Text className="text-lg  font-medium">New Arrivals</Text>
            <TouchableOpacity activeOpacity={0.4}>
              <Text className="text-sm text-primary font-bold">See all</Text>
            </TouchableOpacity>
          </View>
          <DiscountBanners />
        </View>
        <FlatList
          legacyImplementation={true}
          scrollEnabled={false}
          contentContainerStyle={{paddingBottom: 40}}
          data={product}
          numColumns={2}
          renderItem={({item, index}) => (
            <ShoesCard
              item={item}
              index={index}
              bestSellers={false}
              favourite={false}
            />
          )}
        />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
