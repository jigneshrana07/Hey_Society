import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useRef } from 'react'
import { styles } from './styles';
import { Container, Header } from '../../components'
import { ImagesPath } from '../../Utils/ImagePaths';
import Swiper from 'react-native-deck-swiper'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/rootStackType';
import { StackScreenProps } from '@react-navigation/stack';

const ShareToEarn = () => {
    type Props = StackScreenProps<RootStackParamList, 'ShareToEarnScreen'>;
    type ShareToEarnNavigationProps = Props['navigation'];
    const navigation = useNavigation<ShareToEarnNavigationProps>();
    const swiperRef = useRef<Swiper<{ title: string; type: string; image: any; }> | null>(null);

    let data = [
        { title: 'Dan villa', type: '4 BHK, California', image: require('../../assets/images/photo.png') },
        { title: 'Dan villa', type: '4 BHK, California', image: require('../../assets/images/photo.png') },
        { title: 'Dan villa', type: '4 BHK, California', image: require('../../assets/images/photo.png') },
        { title: 'Dan villa', type: '4 BHK, California', image: require('../../assets/images/photo.png') },
        { title: 'Dan villa', type: '4 BHK, California', image: require('../../assets/images/photo.png') },
        { title: 'Dan villa', type: '4 BHK, California', image: require('../../assets/images/photo.png') }
    ]

    const renderCard = (card: { title: string; type: string; image: any; }) => {
        return (
            <ImageBackground source={card.image} style={styles.card} resizeMode={'stretch'}>
                <View style={styles.cardTopStyle}>
                    <Text style={styles.cardTopTxt}>10¢ per click </Text>

                </View>
                <View style={styles.cardTextView}>
                    <Text style={styles.cardTitle}>{card.title}</Text>
                    <Text style={styles.cardTypeTxt}>{card.type}</Text>
                </View>
            </ImageBackground>
        )
    };

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
                    <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('FilterScreen')}>
                        <Image source={ImagesPath.filter_icon} style={[styles.backIcon, { tintColor: colors.primay_color }]} resizeMode={'contain'} />
                    </TouchableOpacity>
                }
            />
            <Container>
                <Swiper
                    ref={swiperRef}
                    cards={[...data]}
                    cardIndex={0}
                    cardVerticalMargin={wp(10)}
                    renderCard={renderCard}
                    disableBottomSwipe={true}
                    disableTopSwipe={true}
                    stackSize={2}
                    stackScale={5}
                    stackSeparation={-wp(10)}
                    overlayLabels={{
                        left: {
                            element: (
                                <View style={styles.overlayLabelsElementStyle}>
                                    <Image
                                        source={ImagesPath.close_icon}
                                        style={styles.overlayElementIcon}
                                    />
                                </View>
                            ),
                            style: {
                                wrapper: styles.wrapper
                            }
                        },
                        right: {
                            element: (
                                <View style={styles.overlayLabelsElementStyle}>
                                    <Image
                                        source={ImagesPath.like_icon}
                                        style={styles.overlayElementIcon}
                                    />
                                </View>
                            ),
                            style: {
                                wrapper: styles.wrapper
                            }
                        }
                    }}
                    animateOverlayLabelsOpacity
                    animateCardOpacity
                    swipeBackCard
                    backgroundColor={colors.white}
                />
            </Container>
            <View style={styles.bottomBtnContainer}>
                <TouchableOpacity
                    onPress={() => swiperRef.current?.swipeLeft()}
                    style={styles.btnSubButtonStyle}>
                    <Image source={ImagesPath.close_icon} resizeMode={'contain'} style={[styles.subBtnIconStyle, { tintColor: colors.lightred }]} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.shareBtnStyle}>
                    <Image source={ImagesPath.detail_icon} resizeMode={'contain'} style={styles.shareBtnIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => swiperRef.current?.swipeRight()}
                    style={styles.btnSubButtonStyle}>
                    <Image source={ImagesPath.like_icon} resizeMode={'contain'} style={[styles.subBtnIconStyle, { tintColor: colors.green }]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ShareToEarn;
