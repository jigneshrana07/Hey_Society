import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Container, Header } from '../../components'
import { ImagesPath } from '../../Utils/ImagePaths'
import { styles } from './styles'
import FontSizes from '../../styles/FontSizes'
import fonts from '../../styles/Fonts'
import { widthPercentageToDP } from 'react-native-responsive-screen'

const FilterScreen = () => {
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: widthPercentageToDP(5) }}>
                    <Text style={{ fontSize: FontSizes.MEDIUM_16, fontFamily: fonts.FONT_POP_MEDIUM }}>Budget</Text>
                    <Text style={{ fontSize: FontSizes.MEDIUM_16, fontFamily: fonts.FONT_POP_REGULAR }}>$200-$8000</Text>
                </View>
            </Container>
        </View>
    )
}

export default FilterScreen

