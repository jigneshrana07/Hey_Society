import { Dimensions, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
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

    card: {
        height: height / 1.8,
        width: '100%',
        borderRadius: 4,
        // borderWidth: 2,
        // borderColor: '#E8E8E8',
        // justifyContent: 'center',
        // backgroundColor: 'white'
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
    },
    overlayLabelsElementStyle: {
        height: wp(20),
        width: wp(20),
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp(10),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6.27,
        elevation: 10
    },
    overlayElementIcon: {
        height: wp(6),
        width: wp(6),
        tintColor: colors.primay_color
    },
    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: height / 1.8
    },
    bottomBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: wp(5),
        paddingVertical: wp(5),
        backgroundColor: colors.white,
        // position: 'absolute',
        // bottom: 0,
        // zIndex: 9999999
    },
    btnSubButtonStyle: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(18),
        height: wp(18),
        borderRadius: wp(9),
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.27,
        elevation: 10,
    },
    subBtnIconStyle: {
        height: wp(6.5),
        width: wp(6.5)
    },
    shareBtnStyle: {
        backgroundColor: colors.primay_color,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(30),
        height: wp(30),
        borderRadius: wp(15),
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.27,
        elevation: 10,
    },
    shareBtnIconStyle: {
        height: wp(15),
        width: wp(15),
        tintColor: colors.white
    },
    cardTextView: {
        paddingHorizontal: wp(5),
        paddingVertical: wp(4),
        backgroundColor: 'rgba(0,0,0,0.9)',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderBottomLeftRadius: wp(5),
        borderBottomRightRadius: wp(5)
    },
    cardTitle: {
        fontFamily: fonts.FONT_POP_BOLD,
        fontSize: FontSizes.EXTRA_LARGE_24,
        color: colors.white
    },
    cardTypeTxt: {
        fontFamily: fonts.FONT_POP_REGULAR,
        fontSize: FontSizes.SMALL_14,
        color: colors.white
    },
    cardTopStyle: {
        top: 0,
        backgroundColor: '#ffffff38',
        borderRadius: 7,
        margin: wp(5),
        width: '35%',
        alignItems: 'center'
    },
    cardTopTxt:
    {
        fontSize: FontSizes.EXTRA_SMALL_12,
        fontFamily: fonts.FONT_POP_SEMI_BOLD,
        color: colors.white,
        marginVertical: wp(2),
        marginHorizontal: wp(1)
    },
    tagRowView: {
        flexDirection: 'row',
        marginVertical: wp(5)
    },
    tagView: {
        backgroundColor: colors.primay_color,
        borderRadius: 5,
        marginHorizontal: wp(1.5)
    },
    tagText: {
        marginVertical: wp(1),
        marginHorizontal: wp(4),
        fontSize: FontSizes.EXTRA_SMALL_10,
        fontFamily: fonts.FONT_POP_MEDIUM,
        color: colors.white
    },
    textView: {
        backgroundColor: '#F2F2F2',
        paddingVertical: wp(3),
        paddingHorizontal: wp(5),
        borderRadius: 15
    },
    titleText: {
        fontSize: FontSizes.MEDIUM_16,
        fontFamily: fonts.FONT_POP_SEMI_BOLD
    },
    subText: {
        fontSize: FontSizes.SMALL_14,
        fontFamily: fonts.FONT_POP_REGULAR,
        marginVertical: wp(1.5)
    },
    backArrowView: {
        position: 'absolute',
        top: hp(8),
        left: wp(10),
        zIndex: 1
    },
    allTextView: {
        paddingVertical: wp(3),
        paddingHorizontal: wp(3),
        marginTop: wp(2)
    }
})