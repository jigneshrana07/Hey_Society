import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImagesPath } from '../../Utils/ImagePaths';
import { Container, Header } from '../../components';
import { styles } from './styles';
import { colors } from '../../styles/Colors';
import fonts from '../../styles/Fonts';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ProfileScreen = () => {

    const data = [
        { name: 'Edit profile' },
        { name: 'Settings' },
        { name: 'Legal' },
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
                    <Text style={styles.headerTxtStyle}>Profile</Text>
                }
                headerRightComponent={
                    <TouchableOpacity style={styles.btnStyle} >
                        <Image source={ImagesPath.filter_icon} style={[styles.backIcon, { tintColor: colors.primay_color }]} resizeMode={'contain'} />
                    </TouchableOpacity>
                }
            />
            <Container>
                <TouchableOpacity style={styles.userview}>
                    <Image source={ImagesPath.profile_image} style={[styles.userimageview]} />
                </TouchableOpacity>
                <Text style={styles.nameText}>Jerome Bell</Text>
                <Text style={styles.balanceText}>Balance:
                    <Text style={{ fontFamily: fonts.FONT_POP_MEDIUM }}>$250.54</Text>
                </Text>
                {data.map((item) => (
                    <View style={styles.textView}>
                        <View style={styles.rowView}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Image source={ImagesPath.back_arrow} resizeMode={'contain'} style={{ height: wp(4.5), width: wp(4.5) }} />
                        </View>
                        <View style={styles.lineView} />
                    </View>
                ))}
            </Container>
        </View>
    )
}

export default ProfileScreen;
