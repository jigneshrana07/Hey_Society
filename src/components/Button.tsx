import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Platform, StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../styles/Colors';
import fonts from '../styles/Fonts';
import FontSizes from '../styles/FontSizes';


interface commanbuttonProps {
    lable: string;
    backgroundColor?: string
    width?: any
    fontColor?: string
}

const Button = (props: commanbuttonProps & TouchableOpacityProps) => {

    return (
        <TouchableOpacity
            {...props}
            style={[pagestyles.buttonmainview, { width: props.width, backgroundColor: props.backgroundColor }, props.style]}>
            <Text style={[pagestyles.buttontext, { color: props.fontColor }]}>{props.lable}</Text>
        </TouchableOpacity>
    );
};

const pagestyles = StyleSheet.create({
    buttontext: {
        letterSpacing: 1,
        fontFamily: fonts.FONT_POP_MEDIUM,
        fontSize: FontSizes.MEDIUM_16,
        paddingVertical: wp(4),
        paddingHorizontal: wp(4),
        textAlign: 'center'
    },
    buttonmainview: {
        alignSelf: 'center',
        borderRadius: wp(50),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 25,
    },
});
export default Button;
