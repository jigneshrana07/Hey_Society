import { Text, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button, Container, Header } from '../../components'
import { ImagesPath } from '../../Utils/ImagePaths'
import { styles } from './style'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../../styles/Colors'
import { useNavigation } from '@react-navigation/native'
import FontSizes from '../../styles/FontSizes'
import fonts from '../../styles/Fonts'
import DropDownField from '../../components/DropDownfield'

const WelcomeScreen = () => {

    const navigation = useNavigation()
    const [isName, setIsName] = useState('')
    const [isLName, setIsLName] = useState('')
    const [isScreen, setIsScreen] = useState(0)

    const Progressbararray = ['1', '2', '3']

    const submit = () => {
        setIsScreen(isScreen + 1)
        if (isScreen == 2) {
            setIsScreen(0)
            // navigation.navigate('AlarmConnectScreen')

        }
    }
    const Gender = [
        { label: 'Male' },
        { label: 'Female' },
    ];


    return (
        <View style={styles.container}>
            <Header
                headerRightComponent={
                    <Image source={ImagesPath.close_icon} resizeMode={'contain'} style={styles.image} />
                }
            />
            <Container>
                {isScreen == 0 && <View>
                    <View style={styles.textView}>
                        <Text style={styles.title}>Tell us your basic information.</Text>
                    </View>
                    <View style={{ padding: wp(6) }}>
                        <Text style={{ fontSize: FontSizes.EXTRA_LARGE_24, fontFamily: fonts.FONT_POP_SEMI_BOLD, color: colors.text_blue }}>Name</Text>

                        <TextInput
                            style={styles.textInputStyle}
                            maxLength={16}
                            value={isName}
                            onChangeText={(number) => { setIsName(number) }}
                        />
                        <Text style={{ fontSize: FontSizes.EXTRA_LARGE_24, fontFamily: fonts.FONT_POP_SEMI_BOLD, color: colors.text_blue, marginTop: wp(5) }}>Last name</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            maxLength={16}
                            value={isLName}
                            onChangeText={(number) => { setIsLName(number) }}
                        />
                        {/* <Text style={{ fontSize: FontSizes.EXTRA_LARGE_24, fontFamily: fonts.FONT_POP_SEMI_BOLD, color: colors.text_blue, marginTop: wp(5) }}>Gender</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            maxLength={16}
                            value={isLName}
                            onChangeText={(number) => { setIsLName(number) }}
                        /> */}
                        <DropDownField
                            titleText={'Gender'}
                            placeholder={''}
                            items={Gender}
                            value={isLName}
                            onValueChange={(value: string) => {
                                setIsLName(value)
                            }}
                        />
                        <Text style={{ fontSize: FontSizes.EXTRA_LARGE_24, fontFamily: fonts.FONT_POP_SEMI_BOLD, color: colors.text_blue, marginTop: wp(5) }}>Birthdate</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            maxLength={16}
                            value={isLName}
                            onChangeText={(number) => { setIsLName(number) }}
                        />
                    </View>
                </View>}
                {isScreen == 1 &&
                    <View>
                        <View style={styles.textView}>
                            <Text style={styles.title}>Give some more information</Text>
                        </View>
                        <View style={{ padding: wp(6) }}>
                            <Text style={{ fontSize: FontSizes.EXTRA_LARGE_24, fontFamily: fonts.FONT_POP_SEMI_BOLD, color: colors.text_blue }}>Phone</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                maxLength={16}
                                value={isName}
                                onChangeText={(number) => { setIsName(number) }}
                            />
                            <Text style={{ fontSize: FontSizes.EXTRA_LARGE_24, fontFamily: fonts.FONT_POP_SEMI_BOLD, color: colors.text_blue, marginTop: wp(5) }}>Job title</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                maxLength={16}
                                value={isLName}
                                onChangeText={(number) => { setIsLName(number) }}
                            />
                            <Text style={{ fontSize: FontSizes.EXTRA_LARGE_24, fontFamily: fonts.FONT_POP_SEMI_BOLD, color: colors.text_blue, marginTop: wp(5) }}>Industry</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                maxLength={16}
                                value={isLName}
                                onChangeText={(number) => { setIsLName(number) }}
                            />
                            <Text style={{ fontSize: FontSizes.EXTRA_LARGE_24, fontFamily: fonts.FONT_POP_SEMI_BOLD, color: colors.text_blue, marginTop: wp(5) }}>Location</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                maxLength={16}
                                value={isLName}
                                onChangeText={(number) => { setIsLName(number) }}
                            />
                        </View>
                        {/* <DropDownField
                            layout={true}
                            titleText={'hgygfy'}
                            placeholder={'hjhghyugyu'}
                            items={Data}
                            value={isLName}
                            onValueChange={(value) => {
                                setIsLName(value)
                            }}
                        /> */}
                        {/* <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Football', value: 'football' },
                                { label: 'Baseball', value: 'baseball' },
                                { label: 'Hockey', value: 'hockey' },
                            ]}
                        /> */}
                    </View>}
                <View style={[styles.secondary]}>
                    {Progressbararray.map((item) => {
                        return (
                            <View
                                style={[styles.progressbarstyle, { backgroundColor: parseInt(item) <= isScreen ? '#79D300' : '#D3D3D3' }]}
                            />
                        );
                    })}
                </View>
                <View style={styles.buttonView}>
                    <Button width={wp(70)} background={colors.primay_color} lable={'Next'} fontcolor={colors.white} onPress={() => submit()} />
                </View>
            </Container>
        </View>
    )
}

export default WelcomeScreen

