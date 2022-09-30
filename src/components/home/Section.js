import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Strings} from '../../assets/values/Strings';

const Section = props => {
    const {colors} = useTheme();

    const {height, width} = Dimensions.get('window');
    const styles = StyleSheet.create({
        SectionContainer: {
            marginTop: 20,
            backgroundColor: colors.componentsBackgroundColor,
            padding: 10,
            elevation: 5,
        },
    });

    return (
        <View style={styles.SectionContainer}>
            <TitleContainer title={props.title} colors={colors} />
            {props.title === Strings.Top_Pics_for_you_Text ? (
                <SubTitleContainer
                    text={Strings.Top_Pics_for_you_Text}
                    colors={colors}
                />
            ) : null}
            <TypeContainer colors={colors} TypeData={props.TypeData} />
            <ListItems title={props.title} colors={colors} data={props.data} />
        </View>
    );
};

export default Section;

const TitleContainer = ({title, colors}) => (
    <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
        }}>
        <View
            style={{
                width: 5,
                height: 24,
                backgroundColor: colors.primaryColor,
                borderRadius: 5,
                marginRight: 5,
            }}
        />
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 0,
            }}>
            <Text
                style={{
                    color: colors.textColor,
                    fontSize: 22,
                    fontFamily: CustomFonts.Bold,
                }}>
                {title}
            </Text>
            <Text
                onPress={() => console.log('See all clicked')}
                style={{
                    color: colors.headingTextColor,
                    fontSize: 18,
                    fontFamily: CustomFonts.Regular,
                }}>
                {Strings.SEE_ALL}
            </Text>
        </View>
    </View>
);

const SubTitleContainer = props => (
    <View
        style={{
            alignItems: 'flex-start',
            marginBottom: -10,
        }}>
        <Text
            style={{
                color: props.colors.inActiveIconColor,
                fontSize: 15,
                paddingHorizontal: 10,
                fontFamily: CustomFonts.Light,
                marginVertical: 10,
            }}>
            {props.text}
        </Text>
        <TouchableOpacity
            style={{
                marginVertical: 10,
                paddingVertical: 0,
            }}>
            <Text
                style={{
                    color: props.colors.headingTextColor,
                    fontSize: 18,
                    fontFamily: CustomFonts.Regular,
                }}>
                {Strings.Improve_Suggestions}
            </Text>
        </TouchableOpacity>
    </View>
);

const TypeContainer = props => {
    const styles = StyleSheet.create({
        ViewStyle: {
            flexDirection: 'row',
            borderRadius: 20,
            borderWidth: 0.5,
            borderColor: props.colors.inActiveIconColor,
            overflow: 'hidden',
            marginRight: 10,
        },
        TextStyle: {
            padding: 8,
            color: props.colors.textColor,
            borderRightWidth: 0.5,
            borderColor: props.colors.inActiveIconColor,
        },
    });
    
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginVertical: 10, marginTop: 25}}>
            
            <View style={styles.ViewStyle}>
                <Pressable
                    style={({pressed}) => [
                        {
                            backgroundColor: pressed
                                ? 'rgba(210, 230, 255,.3)'
                                : 'transparent',
                        },
                    ]}>
                    <Text style={styles.TextStyle}>Other Provider</Text>
                </Pressable>

                <Pressable
                    style={({pressed}) => [
                        {
                            backgroundColor: pressed
                                ? 'rgba(210, 230, 255,.3)'
                                : 'transparent',
                            borderRadius: 20,
                        },
                    ]}>
                    <Text style={styles.TextStyle}>Prime Videos</Text>
                </Pressable>
            </View>

            <View style={styles.ViewStyle}>
                <Pressable
                    style={({pressed}) => [
                        {
                            backgroundColor: pressed
                                ? 'rgba(210, 230, 255,.3)'
                                : 'transparent',
                        },
                    ]}>
                    <Text style={styles.TextStyle}>Other Provider</Text>
                </Pressable>
                <Pressable
                    style={({pressed}) => [
                        {
                            backgroundColor: pressed
                                ? 'rgba(210, 230, 255,.3)'
                                : 'transparent',
                            borderRadius: 20,
                        },
                    ]}>
                    <Text style={styles.TextStyle}>Prime Videos</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const ListItems = props => (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 20}}>
        {props.data.map((item, index) => (
            <ListItem
                key={index}
                colors={props.colors}
                data={item}
                title={props.title}
            />
        ))}
    </ScrollView>
);

const ListItem = ({colors, data,title}) => {
    let time = data.time;
    let h = Math.floor(time / 60);
    let m = time % 60;
    const [overlay, setOverlay] = useState(false);
    return (
        <Pressable
            onPress={() => {}}
            onPressIn={() => setOverlay(true)}
            onPressOut={() => setOverlay(false)}
            style={{
                width: 125,
                height: 330,
                overflow: 'hidden',
                marginHorizontal: 5,
                backgroundColor: colors.componentsBackgroundColor,
                borderRadius: 15,
                elevation: 4,
            }}>
            {overlay ? (
                <View
                    style={{
                        width: '100%',
                        height: '55%',
                        zIndex: 1,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.4)',
                    }}
                />
            ) : null}

            <View
                style={{
                    flex: 1,
                    width: '100%',
                }}>
                <Image
                    source={{uri: data.image}}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>

            <View
                style={{
                    height: '45%',
                    paddingVertical: 10,
                    paddingHorizontal: 8,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons
                        name="star"
                        size={20}
                        color={colors.primaryColor}
                    />
                    <Text>{data.rating}</Text>
                </View>

                <Text
                    style={{
                        color: colors.textColor,
                        paddingTop: 5,
                        height: 50,
                        fontSize: 15,
                    }}>
                    {data.title.slice(0, 20)}
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        marginBottom: 8,
                    }}>
                    <Text
                        style={{
                            color: colors.plusIconBackgroundColor,
                            fontSize: 12,
                        }}>
                        {data.year}{' '}
                    </Text>
                    {title === Strings.Popular_TV ? (
                        <Text
                            style={{
                                color: colors.plusIconBackgroundColor,
                                fontSize: 12,
                            }}>
                            {' '}
                            {data.eps}eps
                        </Text>
                    ) : (
                        <Text
                            style={{
                                color: colors.plusIconBackgroundColor,
                                fontSize: 12,
                            }}>
                            {' '}
                            {h}h {m}m
                        </Text>
                    )}
                </View>

                <Pressable
                    onPress={() => {}}
                    style={{
                        borderWidth: 1,
                        borderColor: colors.plusIconBackgroundColor,
                        borderRadius: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 6,
                        marginHorizontal: 3,
                    }}>
                    <Text style={{color: colors.headingTextColor}}>
                        {Strings.Watch_option}
                    </Text>
                </Pressable>
            </View>
        </Pressable>
    );
};
