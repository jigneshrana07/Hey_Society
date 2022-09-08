import { Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../styles/Colors';
import fonts from '../../styles/Fonts';
import FontSizes from '../../styles/FontSizes';

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    backIcon: {
        height: wp(5),
        width: wp(5),
        resizeMode: 'contain'
    },
    titleTxt: {
        fontSize: FontSizes.LARGE_30,
        fontFamily: fonts.FONT_POP_SEMI_BOLD,
        paddingLeft: wp(5),
    },
    subTitleTxt:
    {
        fontSize: FontSizes.EXTRA_SMALL_12,
        fontFamily: fonts.FONT_POP_REGULAR,
        marginVertical: wp(3),
        width: wp(85),
        left: wp(5)
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
    buttonView: {
        position: 'absolute',
        bottom: wp(10),
        alignSelf: 'center'
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: wp(2.5),
        paddingHorizontal: wp(5)
    },
    lableText: {
        fontSize: FontSizes.MEDIUM_16,
        fontFamily: fonts.FONT_POP_SEMI_BOLD,
        color: colors.text_blue
    },
    rowText1: {
        fontSize: FontSizes.MEDIUM_16,
        fontFamily: fonts.FONT_POP_MEDIUM,
        color: '#1F1F1F'
    },
    rowText2: {
        fontSize: FontSizes.MEDIUM_16,
        fontFamily: fonts.FONT_POP_REGULAR,
        color: '#1F1F1F'
    }
})