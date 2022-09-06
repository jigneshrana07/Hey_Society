import { StyleSheet, Text, TextInputProps, View } from 'react-native'
import React from 'react'
import FontSizes from '../styles/FontSizes';
import fonts from '../styles/Fonts';
import { colors } from '../styles/Colors';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface CustomTextInputProps {
    lable: string
}

const CustomTextInput = (props: CustomTextInputProps & TextInputProps) => {
    return (
        <View style={{ marginHorizontal: wp(4), marginTop: wp(5) }}>
            <Text style={styles.labelTxt}>{props.lable}</Text>
            <TextInput
                {...props}
                style={[styles.textInputStyle, props.style]}
            />
        </View>
    )
}

export default CustomTextInput;

const styles = StyleSheet.create({
    labelTxt: {
        fontSize: FontSizes.EXTRA_LARGE_24,
        fontFamily: fonts.FONT_POP_SEMI_BOLD,
        color: colors.text_blue
    },
    textInputStyle: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#DADADA',
        fontSize: FontSizes.SEMI_LARGE_20,
        fontFamily: fonts.FONT_POP_MEDIUM,
        color: '#878EA4',
    }
})