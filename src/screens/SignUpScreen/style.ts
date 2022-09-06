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
        color: '#767676',
    },
    textView: {
        paddingHorizontal: wp(4),
        marginTop: hp(14)
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
        borderBottomColor: '#DADADA',
        borderBottomWidth: 2,
        height: wp(12),
        fontFamily: fonts.FONT_POP_MEDIUM,
        color: '#878EA4',
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
})