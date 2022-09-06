import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTabNavigtaion';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { RootStackParamList } from '../types/rootStackType';
import FilterScreen from '../screens/FilterScreen';

const Stack = createStackNavigator<RootStackParamList>();


const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SplashScreen'}>
                <Stack.Screen name={'BottomTabScreens'} component={BottomTab} />
                <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
                <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
                <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
                <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
                <Stack.Screen name={'FilterScreen'} component={FilterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
