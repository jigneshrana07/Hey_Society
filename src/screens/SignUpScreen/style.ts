import { Dimensions, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../styles/Colors';
import fonts from '../../styles/Fonts';
import FontSizes from '../../styles/FontSizes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    title: {
        fontSize: FontSizes.REGULAR_18,
        fontFamily: fonts.FONT_POP_SEMI_BOLD,
        color: colors.primay_color
    },
    subTitle: {
        fontSize: FontSizes.REGULAR_18,
        fontFamily: fonts.FONT_POP_REGULAR,
        color: colors.light_grey_text,
    },
    textView: {
        paddingHorizontal: wp(4),
        marginTop: hp(8)
    },
    image: {
        height: wp(5),
        width: wp(5)
    },
    buttonView: {
        position: 'absolute',
        bottom: wp(10),
        alignSelf: 'center'
    },
    textInputStyle: {
        width: wp(90),
        alignSelf: "center",
        fontSize: FontSizes.SEMI_LARGE_20,
        borderBottomColor: colors.grey_border_color,
        borderBottomWidth: 2,
        height: wp(12),
        fontFamily: fonts.FONT_POP_MEDIUM,
        color: colors.light_blue_text,
    },
    progressbarstyle: {
        height: wp(0.6),
        width: wp(12),
        borderRadius: 20,
        backgroundColor: '#D3D3D3'
    },
    secondary: {
        justifyContent: 'space-around',
        marginHorizontal: wp(28),
        flexDirection: "row",
        top: wp(15)
    },
    boxView: {
        borderRadius: 5, alignSelf: 'center',
        alignItems: 'center',
        width: wp(60),
        height: wp(40),
        justifyContent: 'center',
        marginVertical: wp(5),
    },
    earnMoneyImage: {
        height: wp(8),
        width: wp(8),
    },
    earnText: {
        fontSize: FontSizes.SEMI_LARGE_20,
        fontFamily: fonts.FONT_POP_MEDIUM,
        marginVertical: wp(5)
    },
    rulesTitle: {
        fontSize: FontSizes.LARGE_22,
        fontFamily: fonts.FONT_POP_SEMI_BOLD,
        marginVertical: wp(5.5),
        color: colors.grey_rule_text
    },
    dotView: {
        backgroundColor: colors.black,
        height: wp(1.5),
        width: wp(1.5),
        borderRadius: 5,
        top: wp(2.5)
    },
    rulesText: {
        alignItems: 'center',
        marginLeft: wp(3),
        fontSize: FontSizes.SMALL_14,
        fontFamily: fonts.FONT_POP_MEDIUM,
        color: colors.grey_rule_text
    },
    rulesBottomTxt: {
        color: colors.grey_rule_text,
        fontSize: FontSizes.SMALL_14,
        fontFamily: fonts.FONT_POP_REGULAR,
        marginTop: wp(5.5)
    },
    progressBarView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',
        width: wp(68),
        paddingVertical: wp(2.5)
    },
    interestRowview: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(48),
        marginVertical: wp(2.5)
    },
    checkBoxView: {
        borderRadius: 2,
        borderWidth: 2,
        borderColor: colors.light_grey_text,
        width: wp(5),
        height: wp(5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkImage: {
        height: wp(3),
        width: wp(3),
        tintColor: colors.primay_color
    },
    interestTxt: {
        marginHorizontal: wp(4),
        color: colors.grey_rule_text,
        fontSize: FontSizes.SMALL_14
    }

})