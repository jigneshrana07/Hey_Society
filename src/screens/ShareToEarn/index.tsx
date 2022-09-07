import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, InteractionManager, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './styles';
import { Container, Header } from '../../components'
import { ImagesPath } from '../../Utils/ImagePaths';
import Swiper from 'react-native-deck-swiper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/rootStackType';
import { StackScreenProps } from '@react-navigation/stack';

const ShareToEarn = () => {
    type Props = StackScreenProps<RootStackParamList, 'ShareToEarnScreen'>;
    type ShareToEarnNavigationProps = Props['navigation'];
    const navigation = useNavigation<ShareToEarnNavigationProps>();
    const swiperRef = useRef<Swiper<{ title: string; type: string; image: any; }> | null>(null);
    const [isImage, setIsImage] = useState(false)
    const [isIndex, setIsIndex] = useState(0)

    let data = [
        { title: 'Dan villa1', type: '4 BHK, California', image: require('../../assets/images/photo.png') },
        { title: 'Dan villa2', type: '4 BHK, California', image: require('../../assets/images/photo.png') },
        { title: 'Dan villa3', type: '4 BHK, California', image: require('../../assets/images/photo.png') },
        { title: 'Dan villa4', type: '4 BHK, California', image: require('../../assets/images/photo.png') },
        { title: 'Dan villa5', type: '4 BHK, California', image: require('../../assets/images/photo.png') },
        { title: 'Dan villa6', type: '4 BHK, California', image: require('../../assets/images/photo.png') }
    ]

    const tagData = [
        { title: 'Cosmetics' },
        { title: 'Consumer' },
        { title: 'Body oils' },
    ]

    const renderCard = (card: { title: string; type: string; image: any; }, index: number) => {
        return (
            <TouchableOpacity onPress={() => setIsImage(!isImage)}>
                <ImageBackground source={card.image} style={styles.card} resizeMode={'stretch'} >
                    <View style={styles.cardTopStyle}>
                        <Text style={styles.cardTopTxt}> 10¢ per click </Text>
                    </View>
                    <View style={styles.cardTextView}>
                        <Text style={styles.cardTitle}>{card.title}</Text>
                        <Text style={styles.cardTypeTxt}>{card.type}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity >
        )
    };

    return (

        <View style={styles.container}>
            {!isImage ? <>
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
                        key={data.length}
                        cardIndex={isIndex}
                        cardVerticalMargin={wp(10)}
                        renderCard={renderCard}
                        disableBottomSwipe={true}
                        disableTopSwipe={true}
                        stackSize={2}
                        stackScale={5}
                        stackSeparation={-wp(10)}
                        // onTapCard={(index) => setIsIndex(data[index])}
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
                        onSwiped={(cardIndex) => { setIsIndex(cardIndex + 1) }}
                    />
                </Container>
            </> :
                <>
                    <TouchableOpacity style={styles.backArrowView} onPress={() => setIsImage(false)}>
                        <Image source={ImagesPath.back_icon} style={styles.backIcon} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <ScrollView>
                        <Container style={{ paddingHorizontal: wp(5), bottom: wp(10) }}>
                            <ImageBackground source={ImagesPath.photo_icon} style={styles.card} resizeMode={'stretch'}>
                                <View style={[styles.cardTextView, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                                    <View>
                                        <Text style={styles.cardTitle}>Hot Toddy</Text>
                                        <Text style={styles.cardTypeTxt}>4 BHK, California</Text>
                                    </View>
                                    <View style={styles.cardTopStyle}>
                                        <Text style={styles.cardTopTxt}> 10¢ per click </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <View style={styles.tagRowView}>
                                {tagData.map((item) => (
                                    <View style={styles.tagView}>
                                        <Text style={styles.tagText}>{item.title}</Text>
                                    </View>
                                ))}
                            </View>
                            <View style={styles.textView}>
                                <Text style={styles.titleText}>How it pays?</Text>
                                <Text style={styles.subText}>You get paid per action of every form filled. </Text>
                            </View>
                            <View style={styles.allTextView}>
                                <Text style={styles.titleText}>Instructions</Text>
                                <Text style={[styles.subText, { width: wp(85) }]}>Instructions Instructions Instructions  asdfas Instructions Instructions Instructions adsfas Instructions Instructions Instructions sdfsdfs Instructions Instructions</Text>
                                <Text style={[styles.titleText, { marginTop: wp(2) }]}>Comment</Text>
                                <Text style={[styles.subText, { width: wp(85) }]}>This is the text that should be added when you share the comment.</Text>
                            </View>
                        </Container>
                    </ScrollView>
                </>}
            <View style={styles.bottomBtnContainer}>
                <TouchableOpacity
                    onPress={() => { swiperRef.current?.swipeLeft(), setIsImage(false) }}
                    style={styles.btnSubButtonStyle}>
                    <Image source={ImagesPath.close_icon} resizeMode={'contain'} style={[styles.subBtnIconStyle, { tintColor: colors.lightred }]} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.shareBtnStyle}>
                    <Image source={ImagesPath.detail_icon} resizeMode={'contain'} style={styles.shareBtnIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { swiperRef.current?.swipeRight(), setIsImage(false) }}
                    style={styles.btnSubButtonStyle}>
                    <Image source={ImagesPath.like_icon} resizeMode={'contain'} style={[styles.subBtnIconStyle, { tintColor: colors.green }]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ShareToEarn;
