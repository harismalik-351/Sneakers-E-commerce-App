import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import {theme} from '../constants/theme';
import {InputField, SecurityIcon} from '../Components';
import {ScrollView} from 'react-native-gesture-handler';
import LongButton from '../Components/LongButton';

const input = 'text-sm font-semibold tracking-wider ';
const RegisterScreen = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [eye, setEye] = React.useState(true);
  return (
    <ScrollView className="flex-1 bg-white p-5">
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
            Register Account
          </Text>
          <Text
            style={styles.textColor}
            className="text-center text-xs tracking-wider">
            Fill Your Details Or Continue With{'\n'}Social Media
          </Text>
        </View>
        <View className="my-2">
          <Text className={input} style={styles.HeadingColor}>
            Your Name
          </Text>
          <InputField
            maxLength={40}
            autoComplete={'email'}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder={'xxxxxxxxxxx'}
            appendChild={<UserIcon color={theme.primeryDark} size={'22'} />}
          />
        </View>
        <View className="">
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
        <LongButton
          title={'Sign Up'}
          backgroundColor={theme.primery}
          color={theme.backgroundColor}
          onPress={() => {
            console.log('login');
          }}
        />
        <LongButton
          title={'Sign Up With Google'}
          backgroundColor={theme.secondaryBackground}
          color={theme.darkColor}
          onPress={() => {
            console.log('login');
          }}
          Childred={
            <Image
              source={require('../../assets/google.png')}
              style={{width: 25, height: 25, marginHorizontal: 10}}
            />
          }
        />
      </View>
      <View className="flex-row self-center justify-center items-center">
        <Text
          style={styles.textColor}
          className="text-sm font-semibold tracking-wide">
          Already Have Account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text
            className="font-bold tracking-wider text-sm"
            style={styles.HeadingColor}>
            {' '}
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  HeadingColor: {
    color: theme.darkColor,
  },
  textColor: {
    color: theme.primeryDark,
  },
});
