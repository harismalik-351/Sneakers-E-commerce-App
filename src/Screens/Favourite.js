import {View} from 'react-native';
import React, {memo} from 'react';
import {HeaderComp, ShoesCard} from '../Components';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useFavorites} from '../AsyncStorage/FavStorage';

const Favourite = ({navigation}) => {
  const {favorites} = useFavorites();

  return (
    <View className="flex-1 bg-background px-3">
      <HeaderComp
        title={'Favoirute'}
        inlineStyles={{
          fontSize: 18,
          fontWeight: '600',
        }}
        prepend={
          <TouchableOpacity
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
          </TouchableOpacity>
        }
        apppend={
          <TouchableOpacity
            style={{
              backgroundColor: theme.backgroundColor,
              padding: 10,
              borderRadius: 30,
              elevation: 3,
            }}>
            <HeartIcon strokeWidth={1.5} color={theme.darkColor} size={'20'} />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={favorites}
        numColumns={2}
        renderItem={({item, index}) => <ShoesCard index={index} item={item} />}
      />
    </View>
  );
};

export default memo(Favourite);
