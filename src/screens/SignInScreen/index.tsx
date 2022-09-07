import { Text, TextInput, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Button, Container } from '../../components';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../styles/Colors';
import { ImagesPath } from '../../Utils/ImagePaths';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/rootStackType';
import { useDispatch } from 'react-redux';
import { signInApiCall } from '../../redux/slices/AuthSlice';
import { AppDispatch } from '../../types/CommonTypes';
import { UserData } from '../../types/UserType';
import { Formik } from 'formik'
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required field'),
    password: Yup.string().required('Password is required field')
})

const SignInScreen = () => {
    type Props = StackScreenProps<RootStackParamList, 'SignInScreen'>;
    type SignInScreenNavigationProps = Props['navigation'];
    const navigation = useNavigation<SignInScreenNavigationProps>();
    const dispatch = useDispatch<AppDispatch>();
    const [isEmail, SetIsEmail] = useState('paolas@kimikads.com');
    const [isPassword, setIsPassword] = useState('paola123');

    return (
        <Container style={{ justifyContent: 'space-between' }}>
            <View>
                <Text style={styles.title}>Login</Text>
                <Formik
                    onSubmit={(value) => {
                        let signInParam = {
                            "email": value.email,
                            "password": value.password
                        }
                        dispatch(signInApiCall(signInParam)).unwrap().then((data: UserData) => {
                            if (data) {
                                navigation.reset({ index: 0, routes: [{ name: 'BottomTabScreens' }] })
                            }
                        })
                    }}
                    validationSchema={validationSchema}
                    initialValues={{ email: '', password: '' }}
                >
                    {({ handleSubmit, values, handleChange, setValues, errors, touched }) => (
                        <>
                            <View style={{ marginTop: wp(4) }}>
                                <Text style={styles.textInputTitle}>Email</Text>
                                <TextInput
                                    placeholder='Email'
                                    style={styles.textInputStyle}
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                />
                                <Text style={styles.errorTxt}>{touched.email ? errors.email : ' '}</Text>
                            </View>
                            <View style={{ marginTop: wp(2) }}>
                                <Text style={styles.textInputTitle}>Password</Text>
                                <TextInput
                                    placeholder='Password'
                                    style={styles.textInputStyle}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                />
                                <Text style={styles.errorTxt}>{touched.password ? errors.password : ' '}</Text>
                            </View>
                            <Text style={styles.forgotText}>forgot password?</Text>
                            <Button
                                style={{ marginTop: wp(10) }}
                                onPress={handleSubmit}
                                width={wp(80)}
                                backgroundColor={colors.primay_color}
                                lable={'Login'}
                                fontColor={colors.white}
                            />
                        </>
                    )}
                </Formik>
            </View>
            <Text style={styles.orText}>OR</Text>
            <Text style={styles.bottomText}>Join Favours with your favourite social media account:</Text>
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

