import { Dimensions, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../styles/Colors';
import fonts from '../../styles/Fonts';
import FontSizes from '../../styles/FontSizes';

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    title: {
        fontSize: FontSizes.LARGE_30,
        fontFamily: fonts.FONT_POP_SEMI_BOLD,
        marginHorizontal: wp(4),
    },
    textInputTitle: {
        fontSize: FontSizes.SMALL_14,
        fontFamily: fonts.FONT_POP_MEDIUM,
        marginVertical: wp(1),
        marginHorizontal: wp(4)
    },
    textInputStyle: {
        borderWidth: 2,
        borderColor: colors.lihghtGrey,
        paddingVertical: wp(5),
        paddingHorizontal: wp(5),
        borderRadius: 10,
        color: colors.black,
        fontSize: FontSizes.MEDIUM_16,
        fontWeight: '500',
        marginTop: wp(2.5),
        marginHorizontal: wp(4)
    },
    forgotText: {
        textDecorationLine: 'underline',
        fontSize: FontSizes.SMALL_14,
        fontFamily: fonts.FONT_POP_MEDIUM,
        alignSelf: 'flex-end',
        marginVertical: wp(2.5),
        marginRight: wp(4),
        color: '#666666'
    },
    orText: {
        fontSize: FontSizes.MEDIUM_16,
        color: colors.offGrey,
        fontFamily: fonts.FONT_POP_MEDIUM,
        alignSelf: 'center',
        // marginVertical: wp(8)
    },
    bottomText: {
        fontSize: FontSizes.SMALL_14,
        color: colors.grey,
        fontFamily: fonts.FONT_POP_MEDIUM,
        marginHorizontal: wp(4),
    },
    image: {
        width: wp(10),
        height: wp(10),
        marginVertical: wp(5),
        marginHorizontal: wp(5),
        alignSelf: 'center'
    },
    imageText: {
        fontSize: FontSizes.EXTRA_SMALL_12,
        fontFamily: fonts.FONT_POP_MEDIUM,
        color: colors.lightred,
        alignSelf: 'center',
        marginTop: wp(3)
    },
    imageView: {
        backgroundColor: colors.transparentBlack,
        borderRadius: 20,
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp(5),
        marginBottom: wp(5)
    },
    errorTxt: {
        fontSize: FontSizes.EXTRA_SMALL_10,
        fontFamily: fonts.FONT_POP_REGULAR,
        color: '#FF0000',
        marginHorizontal: wp(4)
    }
})