import { Image, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import FontSizes from '../styles/FontSizes'
import fonts from '../styles/Fonts'
import { colors } from '../styles/Colors'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select'
import { ImagesPath } from '../Utils/ImagePaths'

interface CustomDropBoxnProps {
    lable: string,
}

const CustomDropBox = (props: CustomDropBoxnProps & PickerSelectProps) => {

    const dropdownIcon = () => {
        return <Image source={ImagesPath.down_arrow} resizeMode={'contain'} style={{ height: wp(3.5), width: wp(3.5), tintColor: colors.primay_color }} />
    }
    return (
        <TouchableWithoutFeedback>
            <View style={{ marginHorizontal: wp(4), marginTop: wp(4) }}>
                <Text style={[styles.labelTxt, { fontSize: FontSizes.MEDIUM_16 }]}>{props.lable}</Text>
                <View style={styles.showfeedView}>
                    <RNPickerSelect
                        {...props}
                        placeholder={props.placeholder ? {
                            label: props.placeholder,
                            value: null
                        } : {}}
                        style={{
                            placeholder: {
                                fontSize: FontSizes.MEDIUM_16,
                                fontFamily: fonts.FONT_POP_MEDIUM,
                                color: '#878EA4',
                            },
                            inputIOS: {
                                height: 50,
                                fontSize: FontSizes.SMALL_14,
                                fontFamily: fonts.FONT_POP_MEDIUM,
                                color: '#878EA4',
                            },
                            inputAndroid: {
                                height: 50,
                                fontSize: FontSizes.SMALL_14,
                                fontFamily: fonts.FONT_POP_MEDIUM,
                                color: '#878EA4',
                            },
                            iconContainer: Platform.OS === 'ios' ? {
                                top: wp(5),
                                left: wp(75),
                            } : {
                                top: wp(5),
                            },
                        }}
                        Icon={dropdownIcon}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CustomDropBox;

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
    },
    showfeedView: {
        paddingHorizontal: wp(3),
        marginVertical: wp(2),
        height: wp(16),
        width: wp(90),
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#E8E6EA'
    },
})