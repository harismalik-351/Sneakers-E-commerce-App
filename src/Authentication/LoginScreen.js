import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ChevronLeftIcon, EnvelopeIcon} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import {InputField, SecurityIcon} from '../Components';
import {ScrollView} from 'react-native-gesture-handler';
import LongButton from '../Components/LongButton';
import GoogleSignin from './GoogleSignIn';

const input = 'text-sm font-semibold tracking-wider ';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [eye, setEye] = React.useState(true);
  return (
    <ScrollView className="flex-1 p-5 bg-white">
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{backgroundColor: theme.secondaryBackground}}
        className="w-12 h-12 rounded-full justify-center items-center">
        <ChevronLeftIcon color={theme.darkColor} size={'18'} />
      </TouchableOpacity>
      <View style={{height: 700, width: 360}}>
        <View className="my-5 ">
          <Text
            style={styles.HeadingColor}
            className="text-center text-3xl tracking-widest font-bold my-2">
            Hello Again!
          </Text>
          <Text
            style={styles.textColor}
            className="text-center text-xs tracking-wider">
            Fill Your Details Or Continue With{'\n'}Social Media
          </Text>
        </View>
        <View className="my-2">
          <Text className={input} style={styles.HeadingColor}>
            Email Address
          </Text>
          <InputField
            maxLength={40}
            autoComplete={'email'}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder={'xyz@gmail.com'}
            appendChild={<EnvelopeIcon color={theme.primeryDark} size={'22'} />}
          />
        </View>
        <View>
          <Text className={input} style={styles.HeadingColor}>
            Password
          </Text>
          <InputField
            maxLength={45}
            autoComplete={'password'}
            value={password}
            secureTextEntry={eye}
            onChangeText={text => setPassword(text)}
            placeholder={'**********'}
            appendChild={
              <SecurityIcon
                color={theme.primeryDark}
                size={'22'}
                setIcon={eye}
                onPress={() => {
                  setEye(!eye);
                }}
              />
            }
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Forget');
          }}
          className=" w-32  justify-center items-end self-end">
          <Text
            style={styles.textColor}
            className="text-xs tracking-wide font-semibold">
            Recovery Password
          </Text>
        </TouchableOpacity>
        <LongButton
          title={'Sign In'}
          backgroundColor={theme.primery}
          color={theme.backgroundColor}
          onPress={() => {
            console.log('login');
          }}
        />
        <GoogleSignin />
      </View>
      <View className="flex-row self-center justify-center items-center">
        <Text
          style={styles.textColor}
          className="text-sm font-semibold tracking-wide">
          New User?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text
            className="font-bold tracking-wider text-sm"
            style={styles.HeadingColor}>
            {' '}
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  HeadingColor: {
    color: theme.darkColor,
  },
  textColor: {
    color: theme.primeryDark,
  },
});
