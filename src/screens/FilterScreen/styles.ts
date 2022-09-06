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
    }
})