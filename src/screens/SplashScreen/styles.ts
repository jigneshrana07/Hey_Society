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
    containerStyle: {
        justifyContent: 'space-between',
        paddingVertical: wp(8)
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
    },
    buttonView: {
        alignSelf: 'center'
    },
    headerImage: {
        height: wp(12),
        width: wp(32),
    }
})