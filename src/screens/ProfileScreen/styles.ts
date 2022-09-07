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
    userview: {
        height: wp(40),
        width: wp(40),
        alignItems: 'center',
        marginTop: wp(5),
        justifyContent: 'center',
        marginHorizontal: wp(5),
        alignSelf: 'center',
    },
    userimageview: {
        resizeMode: 'cover',
        height: wp(40),
        width: wp(40),
        borderRadius: 50,
    },
    nameText: {
        alignSelf: 'center',
        fontSize: FontSizes.MEDIUM_16,
        fontFamily: fonts.FONT_POP_MEDIUM,
        marginVertical: wp(1.5)
    },
    balanceText: {
        alignSelf: 'center',
        fontFamily: fonts.FONT_POP_SEMI_BOLD,
        fontSize: FontSizes.REGULAR_18,
        marginBottom: wp(8)
    },
    textView: {
        paddingHorizontal: wp(5),
        paddingVertical: wp(1.5)
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: FontSizes.MEDIUM_16,
        fontFamily: fonts.FONT_POP_MEDIUM
    },
    lineView: {
        width: '100%',
        borderColor: '#EEEDEE',
        borderWidth: 1.5,
        marginVertical: wp(2.5)
    }

})