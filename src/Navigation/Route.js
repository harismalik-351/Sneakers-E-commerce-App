import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ForgetPasswordScreen,
  LoginScreen,
  OtpScreen,
  RegisterScreen,
} from '../Authentication';
import BootSplash from 'react-native-bootsplash';
import {OnBoardScreen} from '../Screens/indes';
import {theme} from '../constants/theme';

const Route = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <NavigationContainer
        theme={{
          dark: false,
          colors: {
            primary: '#fff',
            background: '#fff',
            card: '#fff',
            text: '#000',
            border: '#fff',
            notification: '#fff',
          },
        }}
        onReady={() => {
          BootSplash.hide();
        }}>
        <Stack.Navigator
          initialRouteName="OnBoardScreen"
          screenOptions={{
            headerShown: false,
            navigationBarColor: '#fff',
            statusBarStyle: 'dark',
            statusBarColor: '#fff',
            animationDuration: 250,
            animation: 'slide_from_right',
            animationTypeForReplace: 'push',
            statusBarTranslucent: true,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Forget" component={ForgetPasswordScreen} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen
            name="OnBoardScreen"
            options={{
              statusBarColor: theme.backdrop,
              navigationBarColor: theme.backdrop,
              statusBarStyle: 'light',
            }}
            component={OnBoardScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Route;
