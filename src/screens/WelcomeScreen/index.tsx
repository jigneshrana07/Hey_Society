import { Text, View, Image } from 'react-native'
import React from 'react'
import { Button, Container, Header } from '../../components'
import { ImagesPath } from '../../Utils/ImagePaths'
import { styles } from './style'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import fonts from '../../styles/Fonts'
import FontSizes from '../../styles/FontSizes'
import { colors } from '../../styles/Colors'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../types/rootStackType'
import { StackScreenProps } from '@react-navigation/stack'

const WelcomeScreen = () => {
    type Props = StackScreenProps<RootStackParamList, 'WelcomeScreen'>;
    type WelcomeScreenNavigationProps = Props['navigation'];
    const navigation = useNavigation<WelcomeScreenNavigationProps>();

    return (
        <View style={styles.container}>
            <Header
                headerRightComponent={
                    <Image
                        source={ImagesPath.close_icon}
                        resizeMode={'contain'}
                        style={styles.image}
                    />
                }
            />
            <Container>
                <View style={styles.textView}>
                    <Text style={styles.title}>First thing's first:</Text>
                    <Text style={styles.subTitle}>Let’s get started with your account</Text>
                </View>
                <View style={styles.buttonView}>
                    <Button
                        width={wp(70)}
                        backgroundColor={colors.primay_color}
                        lable={'Ok, listo.'}
                        fontColor={colors.white}
                        onPress={() => navigation.navigate('SignUpScreen')}
                    />
                </View>
            </Container>
        </View>
    )
}

export default WelcomeScreen

