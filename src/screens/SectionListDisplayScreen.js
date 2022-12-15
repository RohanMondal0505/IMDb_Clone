import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
    Dimensions,
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import YoutubePlayer from 'react-native-youtube-iframe';
import {CustomFonts} from '../assets/values/CustomFonts';
import {Strings} from '../assets/values/Strings';
import TitleContainer from '../components/Custom/TitleContainer';
import Social from '../components/home/Social';

const SectionListDisplayScreen = ({navigation, route}) => {
    const {colors} = useTheme();
    const {data} = route.params;
    let time = data.time;
    let h = Math.floor(time / 60);
    let m = time % 60;

    const {height, width} = Dimensions.get('window');

    const [addToWatch, setAddToWatch] = useState(false);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.mainBackgroundColor,
            }}>
            <View
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignContent: 'center',
                    backgroundColor: colors.componentsBackgroundColor,
                    marginBottom: 10,
                    elevation: 2,
                }}>
                <Icon
                    name="arrow-left"
                    color={colors.textColor}
                    size={26}
                    onPress={() => navigation.goBack()}
                />
                <Text
                    style={{
                        color: colors.textColor,
                        fontSize: 22,
                        marginLeft: 20,
                        fontFamily: CustomFonts.Bold,
                    }}>
                    {data.title}
                </Text>
            </View>

            <ScrollView
                contentContainerStyle={{paddingBottom: 15}}
                showsVerticalScrollIndicator={false}>
                {/* Mean Heading Section */}
                <View
                    style={{
                        backgroundColor: colors.componentsBackgroundColor,
                        elevation: 4,
                        marginBottom: 0,
                    }}>
                    <View style={styles.TextContainer}>
                        <Text
                            style={[
                                styles.TitleText,
                                {color: colors.textColor},
                            ]}>
                            {data.title}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text
                                style={[
                                    styles.SubText,
                                    {color: colors.textColor},
                                ]}>
                                {data.year}{' '}
                            </Text>
                            {data.type ? (
                                <Text
                                    style={[
                                        styles.SubText,
                                        {color: colors.textColor},
                                    ]}>
                                    {'  '}
                                    {data.type}
                                    {'  '}
                                </Text>
                            ) : null}
                            <Text
                                style={[
                                    styles.SubText,
                                    {color: colors.textColor},
                                ]}>
                                {h}h {m}m
                            </Text>
                        </View>
                    </View>

                    <View style={styles.VideoContainer}>
                        <YoutubePlayer
                            height={200}
                            width={width}
                            play={true}
                            videoId={data.videoId}
                        />
                    </View>

                    <View style={styles.PosterMainContainer}>
                        <View style={styles.PosterContainer}>
                            <View style={styles.LeftPoserContainer}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute',
                                    }}
                                    source={require('../assets/images/IMDb_App_Icon.png')}
                                />
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    source={{uri: data.image}}
                                />
                            </View>
                            <View style={styles.RightPoserContainer}>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: '#000',
                                        textAlign: 'left',
                                        fontFamily: CustomFonts.Regular,
                                    }}>
                                    {data.desc}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.BottomContainer}>
                            <View
                                style={[
                                    styles.BottomTopContainer,
                                    {
                                        borderBottomColor: colors.overlayColor,
                                    },
                                ]}>
                                <TouchableOpacity
                                    onPress={() =>
                                        data.watch == 'Netflix'
                                            ? Linking.openURL(
                                                  'https://www.netflix.com/in/',
                                              )
                                            : Linking.openURL(
                                                  'https://www.hotstar.com/in',
                                              )
                                    }
                                    style={[
                                        styles.WatchButton,
                                        {backgroundColor: colors.primaryColor},
                                    ]}>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <Icon2
                                            name="playcircleo"
                                            size={35}
                                            color={colors.textColor}
                                        />
                                    </View>
                                    <View style={{flex: 4, paddingVertical: 0}}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontFamily: CustomFonts.Regular,
                                            }}>
                                            Watch on {data.watch}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 17,
                                                fontFamily: CustomFonts.Regular,
                                            }}>
                                            Go to{' '}
                                            {data.watch == 'Netflix'
                                                ? 'netflix.com'
                                                : 'hotstar.com'}
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => setAddToWatch(!addToWatch)}
                                    style={[
                                        styles.AddToWatchButton,
                                        {
                                            backgroundColor:
                                                colors.bottomBarOverlay,
                                        },
                                    ]}>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        {addToWatch ? (
                                            <Icon
                                                name="check"
                                                size={30}
                                                color={colors.textColor}
                                            />
                                        ) : (
                                            <Icon2
                                                name="plus"
                                                size={30}
                                                color={colors.textColor}
                                            />
                                        )}
                                    </View>
                                    <View
                                        style={{
                                            flex: 4,
                                            paddingVertical: 0,
                                            justifyContent: 'center',
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontFamily: CustomFonts.Regular,
                                            }}>
                                            {addToWatch
                                                ? 'Added to Watchlist'
                                                : 'Add to Watchlist'}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.BottomBottomContainer}>
                                <TouchableOpacity style={styles.columns}>
                                    <Icon3
                                        name="star"
                                        size={30}
                                        color={colors.primaryColor}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color: colors.textColor,
                                            fontFamily: CustomFonts.Bold,
                                        }}>
                                        {data.rating}/10
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.columns}>
                                    <Icon3
                                        name="star-o"
                                        size={30}
                                        color={colors.headingTextColor}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: colors.headingTextColor,
                                            fontWeight: '500',
                                            fontFamily: CustomFonts.Regular,
                                        }}>
                                        Rate this
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.columns}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: colors.textColor,
                                            fontWeight: '600',
                                            fontFamily: CustomFonts.Regular,
                                        }}>
                                        CRITICS' REVIEWS
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Details */}
                <View
                    style={{
                        marginTop: 15,
                        backgroundColor: colors.componentsBackgroundColor,
                        padding: 10,
                        elevation: 5,
                    }}>
                    <TitleContainer title={Strings.Details} />
                    <View
                        style={[
                            styles.DetailsContainer,
                            {borderColor: colors.overlayColor},
                        ]}>
                        <Text
                            style={{
                                fontFamily: CustomFonts.Regular,
                                fontSize: 17,
                                marginBottom: 8,
                            }}>
                            Release Data
                        </Text>
                        <Text
                            style={{
                                fontFamily: CustomFonts.Regular,
                                fontSize: 14,
                            }}>
                            {data.date}, {data.year}
                        </Text>
                    </View>

                    <View
                        style={[
                            styles.DetailsContainer,
                            {borderColor: colors.overlayColor},
                        ]}>
                        <Text
                            style={{
                                fontFamily: CustomFonts.Regular,
                                fontSize: 17,
                                marginBottom: 8,
                            }}>
                            Country of Origin
                        </Text>
                        <Text
                            style={{
                                fontFamily: CustomFonts.Regular,
                                fontSize: 14,
                            }}>
                            {data.origin}
                        </Text>
                    </View>

                    {data.director ? (
                        <View
                            style={[
                                styles.DetailsContainer,
                                {borderColor: colors.overlayColor},
                            ]}>
                            <Text
                                style={{
                                    fontFamily: CustomFonts.Regular,
                                    fontSize: 17,
                                    marginBottom: 8,
                                }}>
                                Director
                            </Text>
                            <Text
                                style={{
                                    fontFamily: CustomFonts.Regular,
                                    fontSize: 14,
                                }}>
                                {data.director}
                            </Text>
                        </View>
                    ) : null}

                    <View
                        style={[
                            styles.DetailsContainer,
                            {borderBottomWidth: 0},
                        ]}>
                        <Text
                            style={{
                                fontFamily: CustomFonts.Regular,
                                fontSize: 17,
                                marginBottom: 8,
                            }}>
                            Language Spoken
                        </Text>
                        <Text
                            style={{
                                fontFamily: CustomFonts.Regular,
                                fontSize: 14,
                            }}>
                            {data.language}
                        </Text>
                    </View>
                </View>

                {/* Box Office */}
                {data.budget ? (
                    <View
                        style={{
                            marginTop: 15,
                            backgroundColor: colors.componentsBackgroundColor,
                            padding: 10,
                            elevation: 5,
                        }}>
                        <TitleContainer title={Strings.Box_Office} />
                        <Text
                            style={{
                                fontSize: 18,
                                paddingVertical: 5,
                                paddingHorizontal: 5,
                                marginTop: 10,
                                color: colors.textColor,
                                fontFamily: CustomFonts.Regular,
                            }}>
                            ₹ {data.budget} Crore INR
                        </Text>
                    </View>
                ) : null}

                {/* Technical Specs */}
                <View
                    style={{
                        marginTop: 15,
                        backgroundColor: colors.componentsBackgroundColor,
                        padding: 10,
                        elevation: 5,
                    }}>
                    <TitleContainer title={Strings.Technical_Specs} />
                    <View style={{paddingVertical: 10, paddingHorizontal: 5}}>
                        <Text
                            style={{
                                fontFamily: CustomFonts.Regular,
                                fontSize: 17,
                                marginBottom: 8,
                            }}>
                            Runtime
                        </Text>
                        <Text
                            style={{
                                fontFamily: CustomFonts.Regular,
                                fontSize: 14,
                            }}>
                            {h}h {m}m
                        </Text>
                    </View>
                </View>

                {/* Social Button Section */}
                <Social />
            </ScrollView>
        </View>
    );
};

export default SectionListDisplayScreen;

const styles = StyleSheet.create({
    TextContainer: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    TitleText: {
        fontSize: 30,
        fontFamily: CustomFonts.Regular,
    },
    SubText: {
        fontSize: 18,
        fontFamily: CustomFonts.Regular,
    },
    VideoContainer: {
        width: '100%',
        height: 200,
        backgroundColor: 'black',
    },
    PosterMainContainer: {
        width: '100%',
    },
    PosterContainer: {
        width: '100%',
        height: 220,
        flexDirection: 'row',
    },
    LeftPoserContainer: {
        width: 115,
        height: 160,
        marginVertical: 30,
        marginHorizontal: 10,
        elevation: 5,
    },
    RightPoserContainer: {
        flex: 2,
        paddingVertical: 60,
        paddingHorizontal: 10,
    },
    BottomContainer: {
        // height: 100,
    },
    BottomTopContainer: {
        height: 150,
        borderBottomWidth: 1,
        paddingHorizontal: 15,
    },
    WatchButton: {
        height: 55,
        marginBottom: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        elevation: 2,
    },
    AddToWatchButton: {
        height: 55,
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        elevation: 2,
    },
    BottomBottomContainer: {
        height: 100,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    columns: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    DetailsContainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
    },
});
