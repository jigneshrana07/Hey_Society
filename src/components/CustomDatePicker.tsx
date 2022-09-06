import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontSizes from '../styles/FontSizes';
import fonts from '../styles/Fonts';
import { colors } from '../styles/Colors';
import DatePicker, { DatePickerProps } from 'react-native-date-picker';
import moment from 'moment';

interface CustomDatePickerProps {
    lable: string
    date: Date
}

const CustomDatePicker = (props: CustomDatePickerProps & DatePickerProps) => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    let currentDate = new Date()

    return (
        <View style={{ marginHorizontal: wp(4), marginTop: wp(5) }}>
            <Text onPress={() => setOpen(true)} style={styles.labelTxt}>{props.lable}</Text>
            <Pressable onPress={() => setOpen(true)} style={styles.dateContainer}>
                <Text style={styles.dateTxt}>{currentDate == date ? "Select Date" : moment(date).format('MM/DD/YYYY')}</Text>
            </Pressable>
            <DatePicker
                {...props}
                modal
                mode="date"
                open={open}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    props.onConfirm && props.onConfirm(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
                androidVariant='iosClone'
            />
        </View>
    )
}

export default CustomDatePicker;

const styles = StyleSheet.create({
    labelTxt: {
        fontSize: FontSizes.EXTRA_LARGE_24,
        fontFamily: fonts.FONT_POP_SEMI_BOLD,
        color: colors.text_blue
    },
    dateContainer: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#DADADA',
        justifyContent: 'center'
    },
    dateTxt: {
        fontSize: FontSizes.SEMI_LARGE_20,
        fontFamily: fonts.FONT_POP_MEDIUM,
        color: '#878EA4',
    }
})