import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {movieData, TVData} from '../../StaticData';
import {CustomFonts} from '../assets/values/CustomFonts';

const VideosScreen = ({navigation}) => {
    const {colors} = useTheme();
    const [mixData, setMixData] = useState(movieData.concat(TVData));
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.mainBackgroundColor,
            }}>
            <FlatList
                style={{marginTop: 10}}
                data={mixData}
                keyExtractor={(item, index) => index}
                numColumns={2}
                columnWrapperStyle={styles.row}
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('VideosPlayScreen', {
                                data: item,
                            })
                        }
                        style={[
                            styles.Container,
                            {backgroundColor: colors.componentsBackgroundColor},
                        ]}>
                        <View style={{flex: 4}}>
                            <Image
                                source={{uri: item.image}}
                                style={{width: '100%', height: '100%'}}
                            />
                            <Icon
                                name="playcircleo"
                                size={55}
                                color={'white'}
                                style={styles.Play}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 10,
                                paddingTop: 5,
                            }}>
                            <Text
                                style={{
                                    fontFamily: CustomFonts.Regular,
                                    fontSize: 16,
                                    lineHeight: 25,
                                }}>
                                {item.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default VideosScreen;

const styles = StyleSheet.create({
    Container: {
        width: 160,
        height: 150,
        marginBottom: 20,
        elevation: 5,
        borderRadius: 5,
        overflow: 'hidden',
    },
    row: {
        flex: 1,
        justifyContent: 'space-around',
    },
    Play: {
        position: 'absolute',
        elevation: 5,
        top: 30,
        left: 50,
    },
});
