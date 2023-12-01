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
import {
  CheckOut,
  HomeScreen,
  MyCart,
  OnBoardScreen,
  ProductScreen,
  SearchScreen,
} from '../Screens';
import {theme} from '../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigation from './BottomNavigation';

const Route = () => {
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    AsyncStorage.getItem('userAuth').then(user => {
      setUser(JSON.stringify(user));
    });
  }, []);

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
          initialRouteName="BottomNavigation"
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
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Forget" component={ForgetPasswordScreen} />
          <Stack.Screen
            name="OnBoardScreen"
            options={{
              statusBarColor: theme.backdrop,
              statusBarTranslucent: true,
              navigationBarColor: theme.backdrop,
              statusBarStyle: 'light',
            }}
            component={OnBoardScreen}
          />
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={{
              statusBarColor: theme.secondaryBackground,
              statusBarTranslucent: true,
              navigationBarHidden: true,
              statusBarStyle: 'dark',
            }}
          />
          <Stack.Screen
            name="MyCart"
            component={MyCart}
            options={{
              statusBarColor: theme.secondaryBackground,
              statusBarTranslucent: true,
              navigationBarHidden: true,
              statusBarStyle: 'dark',
            }}
          />
          <Stack.Screen
            name="Checkout"
            component={CheckOut}
            options={{
              statusBarColor: theme.secondaryBackground,
              statusBarTranslucent: true,
              navigationBarHidden: true,
              statusBarStyle: 'dark',
            }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              statusBarColor: theme.secondaryBackground,
              statusBarTranslucent: true,
              navigationBarHidden: true,
              statusBarStyle: 'dark',
            }}
          />
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={{
              statusBarColor: theme.secondaryBackground,
              statusBarTranslucent: true,
              navigationBarHidden: true,
              statusBarStyle: 'dark',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Route;
