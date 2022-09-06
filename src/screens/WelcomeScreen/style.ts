import { Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../styles/Colors';
import fonts from '../../styles/Fonts';
import FontSizes from '../../styles/FontSizes';

const { height } = Dimensions.get('screen');

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
        fontSize: FontSizes.LARGE_30,
        fontFamily: fonts.FONT_POP_SEMI_BOLD,
        color: colors.black,
        marginVertical: wp(3)
    },
    textView: {
        padding: wp(5),
        marginTop: wp(25)
    },
    image: {
        height: wp(5),
        width: wp(5)
    },
    buttonView: {
        position: 'absolute',
        bottom: wp(10),
        alignSelf: 'center'
    }

})