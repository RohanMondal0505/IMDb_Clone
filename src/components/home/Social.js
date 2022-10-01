import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomFonts} from '../../assets/values/CustomFonts';

const Social = () => {
    const {colors} = useTheme();

    const styles = StyleSheet.create({
        Container: {
            marginTop: 20,
            backgroundColor: colors.componentsBackgroundColor,
            padding: 10,
            elevation: 5,
        },
    });

    return (
        <View style={styles.Container}>
            <TitleContainer title="Follow IMDb" colors={colors} />
            <View style={{marginVertical: 0, flexDirection: 'row'}}>
                <SocialButton name="ios-logo-facebook" colors={colors} link='facebook' />
                <SocialButton name="ios-logo-instagram" colors={colors} link='instagram' />
                <SocialButton name="ios-logo-twitch" colors={colors} link='twitch' />
                <SocialButton name="ios-logo-twitter" colors={colors} link='twitter' />
                <SocialButton name="ios-logo-youtube" colors={colors} link='youtube' />
            </View>
        </View>
    );
};

export default Social;

const TitleContainer = ({title, colors}) => (
    <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
        }}>
        <View
            style={{
                width: 4,
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
        </View>
    </View>
);

const SocialButton = props => (
    <Pressable
        onPress={() => {
            console.log(props.link)
            Linking.canOpenURL('https://www.facebook.com/');
         }}
        style={({pressed}) => [
            {
                backgroundColor: pressed
                    ? props.colors.bottomBarOverlay
                    : 'transparent',
                padding: 10,
            },
        ]}>
        <Icon
            name={props.name}
            size={32}
            color={props.colors.SocialButtonColor}
            style={{marginHorizontal: 5}}
        />
    </Pressable>
);
