import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
            <View style={{marginVertical: 10, flexDirection: 'row'}}>
                <SocialButton name="ios-logo-facebook" colors={colors}/>
                <SocialButton name="ios-logo-instagram" colors={colors}/>
                <SocialButton name="ios-logo-twitch" colors={colors}/>
                <SocialButton name="ios-logo-twitter" colors={colors}/>
                <SocialButton name="ios-logo-youtube" colors={colors}/>
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
    <Icon
        name={props.name}
        size={32}
        color={props.colors.SocialButtonColor}
        style={{marginHorizontal: 12}}
    />
);
