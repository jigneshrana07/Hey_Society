import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { View, Text, StyleSheet, Image } from 'react-native';
import ShareToEarn from '../screens/ShareToEarn';
import FavoriteScreen from '../screens/FavoriteScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { ImagesPath } from '../Utils/ImagePaths';
import { colors } from '../styles/Colors';
import { RootStackParamList } from '../types/rootStackType';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTab = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.primay_color,
                tabBarInactiveTintColor: colors.bottom_tab_unfocus,
                tabBarStyle: { backgroundColor: colors.bottom_tab_bg },
            }}
            initialRouteName={'ShareToEarnScreen'}>
            <Tab.Screen
                name={'ShareToEarnScreen'}
                component={ShareToEarn}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.iconContainerStyle, { borderColor: focused ? colors.primay_color : 'transparent' }]}>
                            <Image source={focused ? ImagesPath.focused_card : ImagesPath.card_icon} style={styles.iconStyle} />
                        </View>
                    ),
                }} />
            <Tab.Screen
                name={'DetailScren'}
                component={DetailScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.iconContainerStyle, { borderColor: focused ? colors.primay_color : 'transparent' }]}>
                            <Image source={ImagesPath.detail_icon} style={[styles.iconStyle, { tintColor: color }]} />
                        </View>
                    ),
                }} />
            <Tab.Screen
                name={'FavoriteScreen'}
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.iconContainerStyle, { borderColor: focused ? colors.primay_color : 'transparent' }]}>
                            <Image source={ImagesPath.like_icon} style={[styles.iconStyle, { tintColor: color }]} />
                        </View>
                    ),
                }} />
            <Tab.Screen
                name={'ProfileScreen'}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.iconContainerStyle, { borderColor: focused ? colors.primay_color : 'transparent' }]}>
                            <Image source={ImagesPath.profile_icon} style={[styles.iconStyle, { tintColor: color }]} />
                        </View>
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default BottomTab;

const styles = StyleSheet.create({
    iconContainerStyle: {
        borderTopWidth: 2,
        width: "65%",
        height: "100%",
        borderColor: colors.primay_color,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle: {
        height: wp(6.5),
        width: wp(6.5),
        resizeMode: 'contain'
    }
})