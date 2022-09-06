import { Text, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Button, Container } from '../../components'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../../styles/Colors'
import { ImagesPath } from '../../Utils/ImagePaths'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../types/rootStackType'

const SignInScreen = () => {
    type Props = StackScreenProps<RootStackParamList, 'SignInScreen'>;
    type SignInScreenNavigationProps = Props['navigation'];
    const navigation = useNavigation<SignInScreenNavigationProps>();
    const [isEmail, SetIsEmail] = useState('');
    const [isPassword, setIsPassword] = useState('');

    return (
        <Container>
            <View style={{ padding: wp(6) }}>
                <Text style={styles.title}>Login</Text>
                <View style={{ marginTop: wp(4) }}>
                    <Text style={styles.textInputTitle}>Email</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        maxLength={16}
                        value={isEmail}
                        onChangeText={(number) => { SetIsEmail(number) }}
                    />
                </View>
                <View style={{ marginTop: wp(2) }}>
                    <Text style={styles.textInputTitle}>Password</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        maxLength={16}
                        value={isPassword}
                        onChangeText={(number) => { setIsPassword(number) }}
                    />
                </View>
                <View>
                    <Text style={styles.forgotText}>forgot password?</Text>
                </View>
                <View style={{ marginTop: wp(15) }}>
                    <Button
                        onPress={() => navigation.navigate('BottomTabScreens')}
                        width={wp(80)}
                        backgroundColor={colors.primay_color}
                        lable={'Login'} 
                        fontColor={colors.white}
                    />
                </View>
                <Text style={styles.orText}>OR</Text>
                <Text style={styles.bottomText}>Join Favours with your favourite social media account:</Text>
            </View>
            <View style={styles.rowView}>
                <View>
                    <View style={styles.imageView}>
                        <Image source={ImagesPath.google_icon} resizeMode={'contain'} style={styles.image} />
                    </View>
                    <Text style={styles.imageText}>Google</Text>
                </View>
                <View>
                    <View style={styles.imageView}>
                        <Image source={ImagesPath.twitter_icon} resizeMode={'contain'} style={styles.image} />
                    </View>
                    <Text style={[styles.imageText, { color: colors.lightBlue }]}>Twitter</Text>
                </View>
                <View>
                    <View style={styles.imageView}>
                        <Image source={ImagesPath.facebook_icon} resizeMode={'contain'} style={styles.image} />
                    </View>
                    <Text style={[styles.imageText, { color: colors.blue }]}>Facebook</Text>
                </View>
                <View>
                    <View style={styles.imageView}>
                        <Image source={ImagesPath.apple_icon} resizeMode={'contain'} style={styles.image} />
                    </View>
                    <Text style={[styles.imageText, { color: colors.black }]}>Apple</Text>
                </View>
            </View>
        </Container>
    )
}

export default SignInScreen

