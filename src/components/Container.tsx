import { NativeModules, StyleSheet, Text, View, ViewProps } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
const { StatusBarManager } = NativeModules;

const Container = ({ style, children }: ViewProps) => {
    return (
        <View style={[styles.containerStyle, style]}>
            {children}
        </View>
    )
}

export default Container

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        marginTop: StatusBarManager.HEIGHT + wp(10.5),
        backgroundColor: 'transparent',
    }
})