import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Images} from '../../assets/values/Images';
import {Strings} from '../../assets/values/Strings';

const LoginRoutesScreen = ({navigation}) => {
    const {colors} = useTheme();
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                padding: 20,
            }}>
            <SocialButton
                colors={colors.black}
                text={Strings.SIGN_IN_WITH_IMDb}
                backgroundColor={colors.white}
                image={Images.IMDb_App_Icon}
                onPress={() => navigation.navigate('Login')}
            />
            <SocialButton
                colors={colors.white}
                text={Strings.SIGN_WITH_GOOGLE}
                backgroundColor={colors.googleIcon}
                image={Images.google}
                onPress={() => console.log('Google')}
            />
            <SocialButton
                colors={colors.white}
                text={Strings.SIGN_WITH_FACEBOOK}
                backgroundColor={colors.facebookIcon}
                image={Images.facebook}
                onPress={() => console.log('Facebook')}
            />
            <SocialButton
                colors={colors.black}
                text={Strings.CREATE_AN_ACCOUNT}
                backgroundColor={colors.primaryColor}
                image={null}
                onPress={() => navigation.navigate('Signup')}
            />
        </View>
    );
};

export default LoginRoutesScreen;

const SocialButton = ({colors, onPress, text, backgroundColor, image}) => (
    <TouchableOpacity
        onPress={onPress}
        style={{
            height: 50,
            width: 350,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: backgroundColor,
            elevation: 5,
            borderRadius: 3,
            overflow: 'hidden',
        }}>
        {image ? (
            <Image
                source={image}
                resizeMode="contain"
                style={{
                    width: 44,
                    height: 44,
                    position: 'absolute',
                    left: 2,
                    backgroundColor: '#fff',
                }}
            />
        ) : null}
        <Text
            style={{
                fontSize: 18,
                color: colors,
                fontFamily: CustomFonts.Regular,
            }}>
            {text}
        </Text>
    </TouchableOpacity>
);
