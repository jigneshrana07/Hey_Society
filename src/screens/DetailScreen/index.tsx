import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { Container, Header } from '../../components';
import { ImagesPath } from '../../Utils/ImagePaths';
import { colors } from '../../styles/Colors';
import FontSizes from '../../styles/FontSizes';
import fonts from '../../styles/Fonts';

const ChatScreen = () => {
    const productData = [
        {
            image: require('../../assets/images/photo.png'),
            title: 'Dan villa',
            date: 'Shared on 26/07/91',
            action: '5,000',
            earning: '$12.56'
        },
        {
            image: require('../../assets/images/photo.png'),
            title: 'Dan villa',
            date: 'Shared on 26/07/91',
            action: '5,000',
            earning: '$12.56'
        },
        {
            image: require('../../assets/images/photo.png'),
            title: 'Dan villa',
            date: 'Shared on 26/07/91',
            action: '5,000',
            earning: '$12.56'
        },
    ]

    return (
        <View style={styles.container}>
            <Header
                headerLeftComponent={
                    <TouchableOpacity>
                        <Image source={ImagesPath.back_icon} style={styles.backIcon} resizeMode={'contain'} />
                    </TouchableOpacity>
                }
                headerCenterComponent={
                    <Text style={styles.headerTxtStyle}>Share to earn</Text>
                }
                headerRightComponent={
                    <TouchableOpacity style={styles.btnStyle} onPress={() => { }}>
                        <Image source={ImagesPath.filter_icon} style={[styles.backIcon, { tintColor: colors.primay_color }]} resizeMode={'contain'} />
                    </TouchableOpacity>
                }
            />
            <Container>
                <Text style={styles.balanceTxt}>Blance: $521.21</Text>

                {productData.map((item) => (
                    <View style={styles.productView}>
                        <Image source={item.image} resizeMode={'contain'} style={styles.image} />
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.dateTxt}>{item.date}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: FontSizes.EXTRA_SMALL_12, fontFamily: fonts.FONT_POP_SEMI_BOLD }}>Actions</Text>
                            <Text style={[styles.dateTxt, { textAlign: 'center' }]}>{item.action}</Text>
                        </View>
                        <View >
                            <Text style={{ fontSize: FontSizes.EXTRA_SMALL_12, fontFamily: fonts.FONT_POP_SEMI_BOLD }}>Earnings</Text>
                            <Text style={[styles.dateTxt, { textAlign: 'center' }]}>{item.earning}</Text>
                        </View>

                    </View>))}
            </Container>
        </View>
    )
}

export default ChatScreen;
