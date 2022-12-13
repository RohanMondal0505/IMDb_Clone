import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {GlobalVariables} from '../Context/AppContext';

const SectionListDisplayScreen = ({navigation, route}) => {
    const {colors} = useTheme();
    const {} = GlobalVariables();
    const {data} = route.params;
    let time = data.time;
    let h = Math.floor(time / 60);
    let m = time % 60;

    console.log('DAta: ', data);

    return (
        <View style={{flex: 1, backgroundColor: colors.mainBackgroundColor}}>
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
                    }}>
                    {data.title}
                </Text>
            </View>

            <ScrollView style={{}}>
                <View
                    style={{
                        backgroundColor: colors.componentsBackgroundColor,
                        elevation: 4,
                        marginBottom: 20,
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
                    {/* FIXME: */}
                    <View style={styles.VideoContainer}>
                        
                    </View>
                    <View style={styles.PosterContainer}>
                        <View style={styles.LeftPoserContainer}>
                            <Image
                                style={{width: '100%', height: '100%'}}
                                source={{uri: data.image}}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.RightPoserContainer}>
                            <Text style={{fontSize: 25, color: '#000'}}>
                                {data.title}
                            </Text>
                        </View>
                    </View>
                </View>
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
    },
    SubText: {
        fontSize: 18,
    },
    VideoContainer: {
        width: '100%',
        height: 220,
        backgroundColor: 'black',
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
        // borderWidth: 1,
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
});
