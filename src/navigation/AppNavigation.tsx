import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTabNavigtaion';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { RootStackParamList } from '../types/rootStackType';
import FilterScreen from '../screens/FilterScreen';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from '../Utils/StorageKeys';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            AsyncStorage.getItem(StorageKeys.AUTH_TOKEN).then((res) => {
                if (res) {
                    setToken(res)
                }
                setIsLoading(false)
            })
        })()
    }, [])

    if (isLoading) {
        return null
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={token ? 'BottomTabScreens' : 'SplashScreen'}>
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
