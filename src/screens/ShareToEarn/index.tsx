import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, InteractionManager, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles';
import { Container, Header } from '../../components'
import { ImagesPath } from '../../Utils/ImagePaths';
import Swiper from 'react-native-deck-swiper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/rootStackType';
import { StackScreenProps } from '@react-navigation/stack';
import { AppDispatch } from '../../types/CommonTypes';
import { useDispatch, useSelector } from "react-redux";
import { getSocialAdsList } from '../../redux/slices/SocialAdsSlice';
import { RootState } from '../../redux/Store';
import { SocialAds } from '../../types/SocialAdsTypes'

const ShareToEarn = () => {
    type Props = StackScreenProps<RootStackParamList, 'ShareToEarnScreen'>;
    type ShareToEarnNavigationProps = Props['navigation'];
    const navigation = useNavigation<ShareToEarnNavigationProps>();
    const dispatch = useDispatch<AppDispatch>()
    const swiperRef = useRef<Swiper<SocialAds> | null>(null);

    const [detailView, setDetailView] = useState(false)
    const [selectIndex, setSelectIndex] = useState(0)
    const [selectedItem, setSelectedItem] = useState<SocialAds>()

    const { socialAdsList } = useSelector((state: RootState) => state.socialAdsReducer)


    useEffect(() => {
        dispatch(getSocialAdsList())
    }, [])

    const tagData = [
        { title: 'Cosmetics' },
        { title: 'Consumer' },
        { title: 'Body oils' },
    ]

    const renderCard = (card: SocialAds) => {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    setSelectedItem(card)
                    setDetailView(true)
                }}>
                <ImageBackground source={{ uri: card.ad_img.img }} borderRadius={wp(5)} style={styles.card} resizeMode={'stretch'}>
                    <View style={styles.cardTopStyle}>
                        <Text style={styles.cardTopTxt}>{card.ad_group.social_cost_per_click} per click</Text>
                    </View>
                    <View style={styles.cardTextView}>
                        <Text style={styles.cardTitle}>{card.social_title}</Text>
                        <Text style={styles.cardTypeTxt}>{card.ad_group.advertiser?.company}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    };

    return (

        <View style={styles.container}>
            {!detailView ? <>
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
                    {socialAdsList && socialAdsList.length !== 0 && <Swiper
                        onSwiped={(number) => setSelectIndex(number + 1)}
                        ref={swiperRef}
                        cards={socialAdsList}
                        cardIndex={0}
                        cardVerticalMargin={wp(10)}
                        renderCard={renderCard}
                        disableBottomSwipe={true}
                        disableTopSwipe={true}
                        stackSize={2}
                        stackScale={5}
                        stackSeparation={-wp(10)}
                        onTapCard={(number) => { console.log(number) }}
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
                    />}
                </Container>
            </> :
                <>
                    <TouchableOpacity style={styles.backArrowView} onPress={() => setDetailView(false)}>
                        <Image source={ImagesPath.back_icon} style={styles.backIcon} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <ScrollView>
                        <Container style={{ paddingHorizontal: wp(5), bottom: wp(10) }}>
                            <ImageBackground source={{ uri: selectedItem?.ad_img.img }} borderRadius={wp(5)} style={styles.card} resizeMode={'stretch'}>
                                <View style={[styles.cardTextView, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                                    <View>
                                        <Text numberOfLines={1} style={[styles.cardTitle, { width: wp(45) }]}>{selectedItem?.social_title}</Text>
                                        <Text style={styles.cardTypeTxt}>{selectedItem?.ad_group.advertiser?.company}</Text>
                                    </View>
                                    <View style={styles.cardTopStyle}>
                                        <Text style={styles.cardTopTxt}>{selectedItem?.ad_group.social_cost_per_click}$ per click</Text>
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
                    onPress={() => {
                        swiperRef.current?.swipeLeft()
                        setDetailView(false)
                    }}
                    disabled={socialAdsList && (selectIndex == socialAdsList.length) ? true : false}
                    style={styles.btnSubButtonStyle}>
                    <Image source={ImagesPath.close_icon} resizeMode={'contain'} style={[styles.subBtnIconStyle, { tintColor: colors.lightred }]} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.shareBtnStyle}>
                    <Image source={ImagesPath.detail_icon} resizeMode={'contain'} style={styles.shareBtnIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        swiperRef.current?.swipeRight()
                        setDetailView(false)
                    }}
                    disabled={socialAdsList && (selectIndex == socialAdsList.length) ? true : false}
                    style={styles.btnSubButtonStyle}>
                    <Image source={ImagesPath.like_icon} resizeMode={'contain'} style={[styles.subBtnIconStyle, { tintColor: colors.green }]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ShareToEarn;
