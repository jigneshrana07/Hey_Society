import { Text, View, Image } from 'react-native'
import React from 'react'
import { Button, Container, Header } from '../../components'
import { ImagesPath } from '../../Utils/ImagePaths'
import { styles } from './styles'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../../styles/Colors'
import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../types/rootStackType'


const SplashScreen = () => {
    type Props = StackScreenProps<RootStackParamList, 'SplashScreen'>;
    type SplashScreenNavigationProps = Props['navigation'];
    const navigation = useNavigation<SplashScreenNavigationProps>();

    return (
        <View style={styles.container}>
            <Header
                headerCenterComponent={
                    <Image
                        source={ImagesPath.hey_society}
                        resizeMode={'contain'}
                        style={styles.headerImage}
                    />
                }
            />
            <Container>
                <Text style={styles.headerTxtStyle}>
                    Share brands and products with your friends and earn money.
                </Text>
                <View style={{ alignSelf: 'center' }}>
                    <Image
                        source={ImagesPath.splash_woman_icon}
                        resizeMode={'contain'}
                        style={styles.image}
                    />
                </View>
                <View style={styles.buttonView}>
                    <View style={{ marginVertical: wp(3) }}>
                        <Button
                            backgroundColor={colors.primay_color}
                            width={wp(65)}
                            lable={'Login'}
                            fontColor={colors.white}
                            onPress={() => navigation.navigate('SignInScreen')}
                        />
                    </View>
                    <Button
                        backgroundColor={colors.green}
                        width={wp(65)}
                        lable={'Signup'}
                        fontColor={colors.white}
                        onPress={() => navigation.navigate('WelcomeScreen')}
                    />
                </View>
            </Container>
        </View>
    )
}

export default SplashScreen