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
        alignItems: 'center'
    },
    image: {
        height: height / 2.5,
        width: height / 2.5,
        alignSelf: 'center',
        left: wp(5)
    },
    headerTxtStyle: {
        fontFamily: fonts.FONT_POP_MEDIUM,
        fontSize: FontSizes.EXTRA_LARGE_24,
        color: colors.black,
        textAlign: 'center',
        width: wp(90),
        marginVertical: wp(10),
    },
    buttonView: {
        position: 'absolute',
        bottom: wp(8),
        alignSelf: 'center'
    },
    headerImage: {
        height: wp(32),
        width: wp(32),
        top: wp(5)
    }


})