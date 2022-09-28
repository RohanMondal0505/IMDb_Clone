import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomColors} from '../../assets/values/CustomColors';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Strings} from '../../assets/values/Strings';

const MoviesSlider = () => {
    const {colors} = useTheme();

    const {height, width} = Dimensions.get('window');
    const styles = StyleSheet.create({
        SwiperContainer: {
            height: height * 0.35,
            width: width,
        },
        TouchableContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.componentsBackgroundColor,
        },
        ImageBackgroundStyle: {
            width: width,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        TextContainer: {
            padding: 20,
            backgroundColor: colors.componentsBackgroundColor,
        },
        TextStyle: {
            fontSize: 14,
            fontWeight: '900',
            color: colors.headingTextColor,
            fontFamily: CustomFonts.Regular,
        },
        TextStyle2: {
            fontSize: 13,
            fontWeight: '400',
            color: colors.headingTextColor,
        },
    });
    let data = ['A', 'B', 'C'];
    return (
        <View style={styles.SwiperContainer}>
            <Swiper autoplay={true} showsPagination={false} autoplayTimeout={5}>
                {data.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.5}
                        style={styles.TouchableContainer}
                        onPress={() => console.log(`Clicked ${index} `)}>
                        <ImageBackground
                            source={require('../../assets/images/IMDb_App_Icon.png')}
                            // resizeMode="contain"
                            style={styles.ImageBackgroundStyle}>
                            <MaterialCommunityIcons
                                name="play-circle-outline"
                                size={height * 0.1}
                                color={CustomColors.white}
                            />
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </Swiper>
            <View style={styles.TextContainer}>
                <Text style={styles.TextStyle}>
                    {Strings.IMDb_Spotlight}
                    <Text style={styles.TextStyle2}>
                        {Strings.IMDb_Spotlight_Text}
                    </Text>
                </Text>
            </View>
        </View>
    );
};

export default MoviesSlider;
