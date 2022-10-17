import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Info from 'react-native-vector-icons/Fontisto';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Images} from '../../assets/values/Images';
import {Strings} from '../../assets/values/Strings';
import {GlobalVariables} from '../../Context/AppContext';

const SignupScreen = ({navigation}) => {
    const {colors} = useTheme();
    const {register} = GlobalVariables();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: colors.mainBackgroundColor}}>
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                    <Image source={Images.IMDb_App_Icon} style={styles.Image} />
                    <Divider width={1} style={{width: '100%', marginTop: 15}} />
                    <View style={styles.Container}>
                        <Text
                            style={[
                                styles.HeaderText,
                                {color: colors.textColor},
                            ]}>
                            {Strings.Create_account}
                        </Text>

                        <View style={[styles.ItemView]}>
                            <TextInput
                                placeholder={Strings.First_and_last_name}
                                value={name}
                                onChangeText={txt => setName(txt)}
                                autocomplete={'name'}
                                autoCapitalize={'words'}
                                autoCorrect={false}
                                style={[
                                    styles.TextInput,
                                    {
                                        backgroundColor: colors.white,
                                        borderColor: colors.overlayColor,
                                    },
                                ]}
                            />

                            <TextInput
                                placeholder={Strings.Your_email_address}
                                value={email}
                                onChangeText={txt => setEmail(txt)}
                                keyboardType={'email-address'}
                                autocomplete={'email'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                style={[
                                    styles.TextInput,
                                    {
                                        backgroundColor: colors.white,
                                        borderColor: colors.overlayColor,
                                    },
                                ]}
                            />
                            <View style={styles.InnerItemView}>
                                <TextInput
                                    placeholder={Strings.Create_a_password}
                                    value={password}
                                    onChangeText={txt => setPassword(txt)}
                                    keyboardType={'password'}
                                    autocomplete={'off'}
                                    autoCapitalize={'none'}
                                    autoCorrect={false}
                                    secureTextEntry={secureText}
                                    style={[
                                        styles.TextInput,
                                        {
                                            backgroundColor: colors.white,
                                            borderColor: colors.overlayColor,
                                            paddingRight: 50,
                                        },
                                    ]}
                                />
                                <Icon
                                    name={secureText ? 'eye-slash' : 'eye'}
                                    size={18}
                                    onPress={() => setSecureText(!secureText)}
                                    style={{
                                        textAlign: 'center',
                                        position: 'absolute',
                                        padding: 20,
                                        right: 0,
                                    }}
                                />
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems:'center',
                                marginBottom: 30,
                            }}>
                            <Info
                                name="info"
                                color={colors.headingTextColor}
                                style={{marginHorizontal: 5}}
                            />

                            <Text
                                style={{
                                    color: colors.textColor,
                                    fontFamily: CustomFonts.Light,
                                    fontWeight: '500',
                                }}>
                                {Strings.Password_must_be_at_least_8_characters}
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => register(email, password)}
                            style={[
                                styles.TouchableOpacity,
                                {
                                    backgroundColor: colors.primaryColor,
                                    borderColor: colors.overlayColor,
                                },
                            ]}>
                            <Text style={styles.Text}>
                                {Strings.Create_your_IMDb_account}
                            </Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                width: '100%',
                                alignItems: 'center',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical: 15,
                            }}>
                            <Divider width={1} style={{width: width / 2.6}} />

                            <Text
                                style={{
                                    color: colors.SocialButtonColor,
                                    fontFamily: CustomFonts.Regular,
                                    paddingHorizontal: 10,
                                }}>
                                {Strings.Already_have_an_account}
                            </Text>

                            <Divider width={1} style={{width: width / 2.6}} />
                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}
                            style={[
                                styles.TouchableOpacity,
                                {
                                    backgroundColor: colors.mainBackgroundColor,
                                    borderColor: colors.overlayColor,
                                },
                            ]}>
                            <Text style={styles.Text}>
                                {Strings.Sign_In_now}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignupScreen;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    KeyboardAvoidingView: {
        marginTop: height * 0.02,
        alignItems: 'center',
    },
    Image: {
        width: 70,
        height: 35,
    },
    Container: {
        width: width,
        padding: 20,
    },
    HeaderText: {
        fontSize: 25,
        width: '100%',
        fontFamily: CustomFonts.Bold,
    },
    ItemView: {
        marginTop: 10,
    },
    InnerItemView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextInput: {
        height: 50,
        width: '100%',
        fontSize: 18,
        marginVertical: 8,
        paddingHorizontal: 10,
        elevation: 5,
        overflow: 'hidden',
        borderWidth: 1,
        borderRadius: 5,
    },
    TouchableOpacity: {
        fontSize: 18,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        elevation: 3,
    },
    Text: {
        fontSize: 18,
    },
});
