import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
    Dimensions,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import YoutubePlayer from 'react-native-youtube-iframe';
import {CustomFonts} from '../assets/values/CustomFonts';
import {Strings} from '../assets/values/Strings';

const VideosPlayScreen = ({navigation, route}) => {
    const {colors} = useTheme();
    const {data} = route.params;
    const {height, width} = Dimensions.get('window');

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

            <View style={styles.Container}>
                <View style={styles.VideoContainer}>
                    {data.videoId ? (
                        <YoutubePlayer
                            height={200}
                            width={width}
                            play={true}
                            videoId={data.videoId}
                        />
                    ) : (
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 20,
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                            }}>
                            No Trailer Available
                        </Text>
                    )}
                </View>
                <View style={styles.TextContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            data.watch == 'Netflix'
                                ? Linking.openURL('https://www.netflix.com/in/')
                                : data.watch == 'Hotstar'
                                ? Linking.openURL('https://www.hotstar.com/in')
                                : Linking.openURL('https://www.youtube.com/')
                        }
                        style={[
                            styles.WatchBtn,
                            {backgroundColor: colors.primaryColor},
                        ]}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: CustomFonts.Regular,
                                color: colors.black,
                            }}>
                            {Strings.Watch_more_videos_on}{' '}
                            {data.watch ? data.watch : 'Youtube'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default VideosPlayScreen;

const styles = StyleSheet.create({
    Container: {},
    VideoContainer: {
        width: '100%',
        height: 200,
        backgroundColor: 'black',
    },
    TextContainer: {
        marginTop: 30,
        paddingHorizontal: 10,
    },
    WatchBtn: {
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 5,
    },
});
