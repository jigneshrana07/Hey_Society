import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontSizes from '../styles/FontSizes'
import fonts from '../styles/Fonts'
import { colors } from '../styles/Colors'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select'
import { ImagesPath } from '../Utils/ImagePaths'
import FastImage from 'react-native-fast-image'

interface CustomDropDownProps {
    lable: string
}

const dropdownIcon = () => {
    return <FastImage source={ImagesPath.down_arrow} resizeMode={'contain'} style={{ height: wp(3.5), width: wp(3.5) }} />
}

const CustomDropDown = (props: CustomDropDownProps & PickerSelectProps) => {
    return (
        <View style={{ marginHorizontal: wp(4), marginTop: wp(5) }}>
            <Text style={styles.labelTxt}>{props.lable}</Text>
            <RNPickerSelect
                {...props}
                placeholder={props.placeholder ? {
                    label: props.placeholder,
                    value: null
                } : {}}
                useNativeAndroidPickerStyle={false}
                style={{
                    placeholder: {
                        fontSize: FontSizes.SEMI_LARGE_20,
                        fontFamily: fonts.FONT_POP_MEDIUM,
                        color: '#878EA4',
                    },
                    inputIOS: {
                        height: 50,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DADADA',
                        fontSize: FontSizes.SEMI_LARGE_20,
                        fontFamily: fonts.FONT_POP_MEDIUM,
                        color: '#878EA4',
                    },
                    inputAndroid: {
                        height: 50,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DADADA',
                        fontSize: FontSizes.SEMI_LARGE_20,
                        fontFamily: fonts.FONT_POP_MEDIUM,
                        color: '#878EA4',
                    },
                    iconContainer: Platform.OS === 'ios' ? {
                        top: wp(6),
                        right: 5,
                    } : {
                        top: wp(5),
                    },
                }}
                Icon={dropdownIcon}
            />
        </View>
    )
}

export default CustomDropDown;

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