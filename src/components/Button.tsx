import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../styles/Colors';
import fonts from '../styles/Fonts';
import FontSizes from '../styles/FontSizes';


interface commanbuttonProps {
    lable: string;
    boxshadowcolor?: any
    textlinespeacing?: any
    background?: string
    onPress?: () => void;
    disable?: boolean
    primary?: boolean
    boxshadow?: boolean
    width?: any
    fontwidth?: any
    boxshadowstyle?: any
    showshadow?: boolean
    fontcolor?: string

}

const Button = ({ fontwidth, fontcolor, lable, onPress, disable, background, width, textlinespeacing }: commanbuttonProps) => {

    return (
        <TouchableOpacity
            disabled={disable}
            onPress={onPress}
            style={[pagestyles.buttonmainview, { width: width, backgroundColor: background }]}>
            <Text style={[pagestyles.buttontext, { color: fontcolor, letterSpacing: textlinespeacing, fontWeight: fontwidth, }]}>{lable}</Text>
        </TouchableOpacity>
    );
};

const pagestyles = StyleSheet.create({
    boxShadowblue: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 12,
    },
    buttontext: {
        letterSpacing: 1,
        fontFamily: fonts.FONT_POP_MEDIUM,
        fontSize: FontSizes.MEDIUM_16,
        // paddingVertical: wp(3),
        textAlign: 'center'
    },
    buttonmainview: {
        width: hp(10),
        height: wp(13),
        alignSelf: 'center',
        borderRadius: wp(50),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 25,
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5,

        elevation: 6,
    },

});
export default Button;
