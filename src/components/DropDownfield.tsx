import React, { useState, forwardRef, useRef } from 'react'
import { Image, View, Text, Platform, TouchableWithoutFeedback, StyleSheet, ViewStyle, ImageStyle, TextStyle, } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { RFValue } from 'react-native-responsive-fontsize'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../styles/Colors'
import fonts from '../styles/Fonts'
import FontSizes from '../styles/FontSizes'
import { ImagesPath } from '../Utils/ImagePaths'

interface Dropdoenprops {
    layout?: boolean
    placeholder?: string;
    titleText: string;
    width?: number;
    ref?: any;
    onDonePress?: () => void;
    onValueChange?: any;
    items: any;
    titleTxt?: TextStyle;
    value: any;
    mainContainer?: ViewStyle
    styleIcon?: ImageStyle
    styleSelect?: ViewStyle
}

const DropDownField = forwardRef(({ onValueChange, onDonePress, value, items, titleText, placeholder, layout, mainContainer, styleIcon, styleSelect, width, titleTxt, }: Dropdoenprops, ref: any) => {
    const [foucs, setFoucs] = useState(false)
    const dropdown = useRef(null)
    return (
        <View>
            <View style={[styles.mainContainer, mainContainer]}>
                {titleText && <Text style={[styles.title, titleTxt]}>
                    {titleText}
                </Text>}
                <RNPickerSelect
                    // pickerProps={{ ref: Platform.OS === 'android' ? ref : null }}
                    ref={Platform.OS === 'ios' ? ref : null}
                    useNativeAndroidPickerStyle={false}
                    onDonePress={() => {
                        onDonePress && onDonePress()
                    }}
                    onValueChange={(value) => {
                        Platform.OS === 'android' && setFoucs(false);
                        Platform.OS === 'android' && onDonePress && onDonePress();
                        onValueChange(value)
                    }}
                    placeholder={placeholder ? {
                        label: placeholder,
                        value: null
                    } : {}}
                    value={value}
                    items={items}
                    style={{
                        placeholder: {
                            fontSize: RFValue(18),
                            color: '#bababa',
                            fontFamily: fonts.FONT_POP_MEDIUM
                        },
                        inputIOS: {
                            fontSize: FontSizes.SEMI_LARGE_20,
                            fontFamily: fonts.FONT_POP_MEDIUM,
                            color: '#878EA4',
                            width: width ? width : wp(85),
                            height: 50,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.grey,
                            ...styleSelect
                        },
                        inputAndroid: {
                            fontSize: RFValue(18),
                            fontFamily: fonts.FONT_POP_MEDIUM,
                            color: colors.black,
                            height: 50,
                            width: width ? width : wp(40),
                            borderBottomWidth: 1,
                            borderBottomColor: colors.grey,
                            ...styleSelect
                        },
                        iconContainer: Platform.OS === 'ios' ? {
                            top: wp(5),
                            right: 5,
                            ...styleIcon
                        } : {
                            top: wp(5),
                            ...styleIcon
                        },
                    }}
                    onOpen={() => setFoucs(true)}
                    onClose={() => setFoucs(false)}

                    Icon={() => {
                        return (
                            <Image source={ImagesPath.down_arrow} resizeMode={'contain'} style={{ height: wp(3.5), width: wp(3.5), right: wp(60), bottom: wp(1) }} />
                        )
                    }}
                />
            </View>
        </View>
    )
})

export default DropDownField;

const styles = StyleSheet.create({
    showfeedView: {
        flexDirection: 'row',
        paddingHorizontal: wp(3),
        marginVertical: wp(2),
        height: wp(14),
        width: wp(90),
        alignSelf: 'center',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
    },
    showfeedImage: {
        height: wp(6),
        width: wp(6),
        resizeMode: 'contain',
    },
    mainContainer: {
        width: wp(85),
        alignSelf: 'center',
        paddingTop: wp(5)
    },
    title: {
        fontSize: FontSizes.EXTRA_LARGE_24,
        fontFamily: fonts.FONT_POP_SEMI_BOLD,
        color: colors.text_blue,
    }
})
