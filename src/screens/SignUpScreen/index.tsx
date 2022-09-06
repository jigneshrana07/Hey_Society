import { FlatList, Image, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { ImagesPath } from '../../Utils/ImagePaths'
import { Button, Container, CustomDropDown, CustomInput, Header } from '../../components'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../../styles/Colors'
import FontSizes from '../../styles/FontSizes'
import fonts from '../../styles/Fonts'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { InterestList } from '../../types/swiperRefType'
import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../types/rootStackType'

interface genderItem {
    label: string;
    value: string | number
}

const Progressbararray = ['1', '2', '3', '4', '5']

const Gender: genderItem[] = [
    { label: 'Male', value: 1 },
    { label: 'Female', value: 2 },
];

const rules = [
    { title: 'Clicks repeated by the same user' },
    { title: 'Clicks / impressions of others with intent to manipulate your income' },
    { title: 'Send Spam emails with intent to manipulate your income' },
    { title: 'Click on your own ads with intent to manipulate you Income.' },
];

const SignUpScreen = () => {
    type Props = StackScreenProps<RootStackParamList, 'SignUpScreen'>;
    type SplashScreenNavigationProps = Props['navigation'];
    const navigation = useNavigation<SplashScreenNavigationProps>();

    const [isScreen, setIsScreen] = useState(1)
    const [products, setProducts] = useState<InterestList[]>([
        { id: 1, name: 'Alcoholic Beverages', isChecked: false },
        { id: 2, name: 'Charity', isChecked: false },
        { id: 3, name: 'Fashion', isChecked: false },
        { id: 4, name: 'Healthcare', isChecked: false },
        { id: 5, name: 'Technolgy', isChecked: false },
        { id: 6, name: 'Art', isChecked: false },
        { id: 7, name: 'Dating', isChecked: false },
        { id: 8, name: 'Furniture', isChecked: false },
        { id: 9, name: 'Software', isChecked: false },
        { id: 10, name: 'Travel & leisure', isChecked: false },
        { id: 11, name: 'Apps', isChecked: false },
        { id: 12, name: 'Clothing', isChecked: false },
        { id: 13, name: 'Financial services', isChecked: false },
        { id: 14, name: 'Home', isChecked: false },
        { id: 15, name: 'Toys', isChecked: false },
        { id: 16, name: 'Cars', isChecked: false },
        { id: 17, name: 'Education', isChecked: false },
        { id: 18, name: 'Gadgets', isChecked: false },
        { id: 19, name: 'Sports', isChecked: false },
    ]);
    const [earnData, setEarnData] = useState([
        { id: 1, title: 'Email', image: require('../../assets/images/email.png'), isSelected: true },
        { id: 2, title: 'Social media', image: require('../../assets/images/Group.png'), isSelected: false },
    ])

    const submit = () => {
        if (isScreen == Progressbararray.length) {
            navigation.navigate('BottomTabScreens')
        } else {
            setIsScreen(isScreen + 1)
        }
    }

    const handleChange = (id: number) => {
        let finalData = products.map((product) => {
            if (id === product.id) {
                return { ...product, isChecked: !product.isChecked };
            }
            return product;
        });
        setProducts(finalData);
    };

    const selectEarnMoney = (id: number) => {
        let earnfinalData = earnData.map((data) => {
            if (id === data.id) {
                return { ...data, isSelected: !data.isSelected };
            }
            return data;
        });
        setEarnData(earnfinalData);
    }

    const renderItem = (item: InterestList) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', width: wp(45), marginVertical: wp(2.5) }}>
                <TouchableOpacity
                    style={{
                        borderRadius: 2, borderWidth: 2, borderColor: '#767676', width: wp(5), height: wp(5), alignItems: 'center', justifyContent: 'center',
                    }}
                    onPress={() => { handleChange(item.id) }}
                >
                    <Image source={item.isChecked ? ImagesPath.check : null} resizeMode={'contain'} style={{ height: wp(3), width: wp(3), tintColor: colors.primay_color }} />
                </TouchableOpacity>
                <Text style={{ marginHorizontal: wp(4), color: '#423E3B', fontSize: FontSizes.SMALL_14 }}>{item.name}</Text>
            </View>
        )

    }

    return (
        <View style={styles.container}>
            <Header
                headerRightComponent={
                    <Image source={ImagesPath.close_icon} resizeMode={'contain'} style={styles.image} />
                }
            />
            <Container>
                {isScreen == 1 && <>
                    <View style={styles.textView}>
                        <Text style={styles.title}>Tell us your basic information.</Text>
                    </View>
                    <View style={{ marginTop: wp(7) }}>
                        <CustomInput
                            lable='Name'
                        />
                        <CustomInput
                            lable='Last name'
                        />
                        <CustomDropDown
                            lable='Gender'
                            items={Gender}
                            placeholder={"Select your Gender"}
                            onValueChange={() => {

                            }}
                        />
                        <CustomInput
                            lable='Birthdate'
                        />
                    </View>
                </>}
                {isScreen == 2 && <>
                    <View style={styles.textView}>
                        <Text style={styles.title}>Give some more information</Text>
                    </View>
                    <View style={{ marginTop: wp(7) }}>
                        <CustomInput
                            lable='Phone'
                        />
                        <CustomInput
                            lable='Job title'
                        />
                        <CustomDropDown
                            lable='Industry'
                            items={Gender}
                            placeholder={"Select Industry"}
                            onValueChange={() => {

                            }}
                        />
                        <CustomDropDown
                            lable='Location'
                            items={Gender}
                            placeholder={"Select your Location"}
                            onValueChange={() => {

                            }}
                        />
                    </View>
                </>}
                {isScreen == 3 &&
                    <>
                        <View style={[styles.textView, { marginTop: hp(6) }]}>
                            <Text style={styles.title}>
                                Select the interest your audience will find more appealing. <Text style={{ color: '#767676', fontFamily: fonts.FONT_POP_REGULAR }}>
                                    (This helps us show you brands that will better connect with your audience and make you earn more.)
                                </Text>
                            </Text>
                        </View>
                        <View style={{ marginTop: wp(6) }}>
                            <FlatList
                                contentContainerStyle={{ marginHorizontal: wp(5) }}
                                data={products}
                                renderItem={({ item }) => renderItem(item)}
                                numColumns={2}
                                scrollEnabled={false} />
                        </View>
                    </>
                }
                {isScreen == 4 &&
                    <>
                        <View style={styles.textView}>
                            <Text style={styles.title}>How would you like to earn money?<Text style={{ color: '#767676', fontFamily: fonts.FONT_POP_REGULAR }}>(you can select both)</Text></Text>
                        </View>
                        {earnData.map((item) => (
                            <TouchableOpacity style={{ backgroundColor: item.isSelected ? '#0D0DE6' : '#F3F3FE', borderRadius: 5, alignSelf: 'center', alignItems: 'center', width: wp(60), height: wp(40), justifyContent: 'center', marginVertical: wp(5), }} onPress={() => selectEarnMoney(item.id)}>
                                <Image source={item.image} resizeMode={'contain'} style={{ height: wp(8), width: wp(8), tintColor: item.isSelected ? '#FFB500' : colors.black }} />
                                <Text style={{ color: item.isSelected ? colors.white : colors.black, fontSize: FontSizes.SEMI_LARGE_20, fontFamily: fonts.FONT_POP_MEDIUM, marginVertical: wp(5) }}>{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </>
                }
                {isScreen == 5 &&
                    <View>
                        <View style={[styles.textView, { padding: 0 }]}>
                            <Text style={styles.title}>Read our rules. <Text style={{ color: '#767676', fontFamily: fonts.FONT_POP_REGULAR }}>(It’s important you follow them so you don’t get banned)</Text></Text>
                            <Text style={{ fontSize: FontSizes.LARGE_22, fontFamily: fonts.FONT_POP_SEMI_BOLD, marginVertical: wp(5.5), color: '#423E3B' }}>
                                There are some activities that we consider invalid in your account:
                            </Text>
                            {rules.map((item) => (<View style={{ flexDirection: 'row', marginVertical: wp(1), }}>
                                <View style={{ backgroundColor: colors.black, height: wp(1.5), width: wp(1.5), borderRadius: 5, top: wp(2.5) }} />
                                <Text style={{
                                    alignItems: 'center', marginLeft: wp(3), fontSize: FontSizes.SMALL_14, fontFamily: fonts.FONT_POP_MEDIUM, color: '#423E3B'
                                }}>{item.title}</Text>
                            </View>))}
                            <Text style={{ color: '#423E3B', fontSize: FontSizes.SMALL_14, fontFamily: fonts.FONT_POP_REGULAR, marginTop: wp(5.5) }}>For These reasons, we could suspend your account. Creating yout account you agree to our <Text style={{ color: '#33A1FD' }}>terms and conditions.</Text></Text>
                        </View>
                    </View>
                }
            </Container>
            <View style={{ marginBottom: wp(5) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around', width: wp(68), paddingVertical: wp(2.5) }}>
                    {Progressbararray.map((item) => {
                        return (
                            <View
                                style={[styles.progressbarstyle, { backgroundColor: parseInt(item) <= isScreen ? '#79D300' : '#D3D3D3' }]}
                            />
                        );
                    })}
                </View>
                <Button
                    lable='Next'
                    backgroundColor={colors.primay_color}
                    fontColor={colors.white}
                    width={wp(70)}
                    onPress={submit}
                />
            </View>
        </View>
    )
}

export default SignUpScreen
