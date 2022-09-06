import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../styles/Colors';
import fonts from '../../styles/Fonts';
import FontSizes from '../../styles/FontSizes';

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
    headerTxtStyle: {
        fontFamily: fonts.FONT_POP_SEMI_BOLD,
        fontSize: FontSizes.EXTRA_LARGE_24,
        color: colors.black
    },
    btnStyle: {
        paddingHorizontal: wp(2.4),
        paddingVertical: wp(2.4),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E8E6EA'
    },
    balanceTxt: {
        marginLeft: wp(58),
        padding: wp(5),
        fontSize: FontSizes.SMALL_14,
        fontFamily: fonts.FONT_POP_SEMI_BOLD
    },
    productView: {
        flexDirection: 'row',
        marginVertical: wp(2),
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    image: {
        height: wp(15),
        width: wp(15),
        borderRadius: 15
    },
    title: {
        fontSize: FontSizes.MEDIUM_16,
        fontFamily: fonts.FONT_POP_SEMI_BOLD
    },
    dateTxt: {
        fontSize: FontSizes.EXTRA_SMALL_12,
        fontFamily: fonts.FONT_POP_MEDIUM
    }


})