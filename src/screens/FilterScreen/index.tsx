import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Button, Container, Header, CustomDropBox } from '../../components'
import { ImagesPath } from '../../Utils/ImagePaths'
import { styles } from './styles'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import RangeSlider from '../../components/Slider/index'
import { colors } from '../../styles/Colors'

const FilterScreen = () => {
    const action = [
        { label: 'hygyug', value: 0 },
        { label: 'jhgyhgy', value: 1 }
    ]
    return (
        <View style={styles.container}>
            <Header
                headerLeftComponent={
                    <TouchableOpacity>
                        <Image source={ImagesPath.back_icon} style={styles.backIcon} resizeMode={'contain'} />
                    </TouchableOpacity>
                }
            />
            <Container>
                <Text style={styles.titleTxt}>Whats your needs?</Text>
                <Text style={styles.subTitleTxt}>Select a few of your needs and let everyone know what you’re passionate about.</Text>
                <View style={styles.rowView}>
                    <Text style={styles.rowText1}>Pay</Text>
                    <Text style={styles.rowText2}>$200-$8000</Text>
                </View>
                <RangeSlider from={4} to={3000} />
                <CustomDropBox
                    lable='Action'
                    items={action}
                    placeholder={"Click"}
                    onValueChange={() => {
                    }}
                />
                <CustomDropBox
                    lable='Difficulty'
                    items={action}
                    placeholder={"Click"}
                    onValueChange={() => {
                    }}
                />
                <View style={{ marginHorizontal: wp(4), marginTop: wp(5) }}>
                    <Text style={styles.lableText}>Categories</Text>
                    <View style={styles.showfeedView}></View>
                </View>
                <View style={styles.buttonView}>
                    <Button
                        btnStyle={{ borderRadius: 5 }}
                        width={wp(90)}
                        backgroundColor={colors.primay_color}
                        lable={'Continue'}
                        fontColor={colors.white}
                    />
                </View>
            </Container>
        </View>
    )
}

export default FilterScreen

