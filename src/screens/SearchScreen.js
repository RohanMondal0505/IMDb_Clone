import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';
import {movieData, TVData} from '../../StaticData';
import {CustomFonts} from '../assets/values/CustomFonts';

const data = movieData.concat(TVData);

const SearchScreen = ({navigation}) => {
    const {colors} = useTheme();
    const [search, setSearch] = useState('');
    const [mixData, setMixData] = useState(data);

    const searchFunction = text => {
        if (text.length > 0) {
            const newData = mixData.filter(item => {
                if (item != null) {
                    const itemData = item.title
                        ? item.title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                }
            });
            setMixData(newData);
        } else {
            setMixData(data);
        }
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.mainBackgroundColor,
                marginHorizontal: 5,
            }}>
            <View style={styles.SearchBox}>
                <Icon
                    name="search"
                    size={30}
                    color={colors.textColor}
                    style={{
                        paddingHorizontal: 5,
                        paddingVertical: 10,
                        backgroundColor: colors.componentsBackgroundColor,
                    }}
                />
                <TextInput
                    placeholder="Search Movies & TV Shows"
                    onChangeText={text => {
                        searchFunction(text);
                        setSearch(text);
                    }}
                    value={search}
                    keyboardType="default"
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={[
                        styles.Search,
                        {
                            color: colors.textColor,
                            backgroundColor: colors.componentsBackgroundColor,
                        },
                    ]}
                />
                {search.length > 0 ? (
                    <Icon2
                        name="cross"
                        size={30}
                        color={colors.textColor}
                        style={{
                            backgroundColor: colors.componentsBackgroundColor,
                            paddingHorizontal: 5,
                            paddingTop: 10,
                            paddingRight: 10,
                        }}
                        onPress={() => {
                            searchFunction('');
                            setSearch('');
                        }}
                    />
                ) : null}
            </View>
            <FlatList
                data={mixData}
                keyExtractor={(item, index) => index}
                ListEmptyComponent={
                    <Text style={[styles.Empty, {color: colors.textColor}]}>
                        No Data Available
                    </Text>
                }
                renderItem={({item, index}) => {
                    let time = item.time;
                    let h = Math.floor(time / 60);
                    let m = time % 60;
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('SectionListDisplay', {
                                    data: item,
                                })
                            }
                            style={[
                                styles.Container,
                                {
                                    backgroundColor:
                                        colors.componentsBackgroundColor,
                                },
                            ]}>
                            <View style={styles.RightContainer}>
                                <Image
                                    source={{uri: item.image}}
                                    style={styles.ImageStyles}
                                />
                            </View>
                            <View style={styles.LeftContainer}>
                                <Text
                                    style={{
                                        fontFamily: CustomFonts.Regular,
                                        fontSize: 20,
                                        lineHeight: 30,
                                    }}>
                                    {item.title}
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: CustomFonts.Regular,
                                        fontSize: 16,
                                    }}>
                                    {item.rating}/10
                                </Text>
                                <Text style={{fontFamily: CustomFonts.Regular}}>
                                    {h}h {m}m
                                </Text>
                                <Text style={{fontFamily: CustomFonts.Regular}}>
                                    {item.year}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    SearchBox: {
        borderWidth: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 15,
        overflow: 'hidden',
    },
    Search: {
        flex: 1,
        paddingHorizontal: 5,
        fontFamily: CustomFonts.Regular,
    },
    Container: {
        height: 120,
        flexDirection: 'row',
        marginVertical: 5,
        elevation: 5,
    },
    RightContainer: {
        flex: 1,
    },
    ImageStyles: {
        width: '100%',
        height: '100%',
    },
    LeftContainer: {
        flex: 3,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    Empty: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        fontSize: 22,
        fontFamily: CustomFonts.Regular,
    },
});
