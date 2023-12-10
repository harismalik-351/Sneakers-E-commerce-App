import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {HeaderComp} from '../Components';
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  PencilIcon,
  PhoneIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import Ripple from 'react-native-material-ripple';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const textStyles = 'justify-between items-center flex-row';

const CheckOut = ({navigation}) => {
  return (
    <>
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
        <ScrollView className="flex-1 bg-white rounded-2xl my-3">
          <Text className="mx-4 mt-4 font-bold text-black text-lg">
            Contact Form
          </Text>
          <View className="justify-between m-3 flex-row items-center">
            <View className="flex-row justify-center items-center">
              <View className="p-2 bg-slate-100 rounded-xl">
                <UserIcon color={'#00000099'} size={'22'} strokeWidth={2} />
              </View>
              <View className="ml-3">
                <Text className="text-base text-black font-bold">
                  Haris Khalid
                </Text>
                <Text className="text-sm text-gray-700 font-semibold">
                  Name
                </Text>
              </View>
            </View>
            <View className="p-2 bg-slate-100 rounded-xl">
              <PencilIcon color={'#00000099'} size={'22'} strokeWidth={2} />
            </View>
          </View>
          <View className="justify-between m-3 flex-row items-center">
            <View className="flex-row justify-center items-center">
              <View className="p-2 bg-slate-100 rounded-xl">
                <EnvelopeIcon color={'#00000099'} size={'22'} strokeWidth={2} />
              </View>
              <View className="ml-3">
                <Text className="text-base text-black font-bold">
                  hariskhalid366@gmail.com
                </Text>
                <Text className="text-sm text-gray-700 font-semibold">
                  Email
                </Text>
              </View>
            </View>
            <View className="p-2 bg-slate-100 rounded-xl">
              <PencilIcon color={'#00000099'} size={'22'} strokeWidth={2} />
            </View>
          </View>
          <View className="justify-between m-3 flex-row items-center">
            <View className="flex-row justify-center items-center">
              <View className="p-2 bg-slate-100 rounded-xl">
                <PhoneIcon color={'#00000099'} size={'22'} strokeWidth={2} />
              </View>
              <View className="ml-3">
                <Text className="text-base text-black font-bold">
                  +92 312 3618793
                </Text>
                <Text className="text-sm text-gray-700 font-semibold">
                  Phone
                </Text>
              </View>
            </View>
            <View className="p-2 bg-slate-100 rounded-xl">
              <PencilIcon color={'#00000099'} size={'22'} strokeWidth={2} />
            </View>
          </View>

          <Text className="mx-4 font-bold text-black text-base">Address</Text>

          <TouchableOpacity className=" flex-1 mx-4 my-2">
            <Image
              progressiveRenderingEnabled={true}
              style={{
                opacity: 0.6,
                width: '100%',
                height: 120,
                borderRadius: 10,
                backgroundColor: '#000000',
              }}
              resizeMode="cover"
              source={require('../../assets/mapview.png')}
            />
            <Text className="absolute bottom-11 left-0 right-0 text-center font-bold text-2xl text-white">
              View Map
            </Text>
          </TouchableOpacity>
          <Text className="mx-4 font-bold text-black text-base">
            Payment Method
          </Text>
        </ScrollView>
      </View>

      <View className="bg-white w-full h-1/3.5">
        <View className="p-4 gap-3">
          <View className={textStyles}>
            <Text className="text-base font-normal text-gray-500">
              SubTotal
            </Text>
            <Text className="text-base font-semibold text-black">$753.95</Text>
          </View>
          <View className={textStyles}>
            <Text className="text-base font-normal text-gray-500">
              Delivery
            </Text>
            <Text className="text-base font-semibold text-black">$53.95</Text>
          </View>
          <View className="border border-gray-500 border-dashed" />
          <View className={textStyles}>
            <Text className="text-base font-normal text-gray-500">Total</Text>
            <Text className="text-base font-semibold text-black">$807.95</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {}}
          className="m-4 rounded-2xl h-14  justify-center items-center bg-primary">
          <Text className="text-center text-white text-xl font-semibold">
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CheckOut;
