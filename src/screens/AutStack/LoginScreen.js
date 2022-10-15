import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const LoginScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {display: 'none'},
            tabBarVisible: false,
        });
        return () =>
            navigation.getParent()?.setOptions({
                tabBarStyle: undefined,
                tabBarVisible: undefined,
            });
    }, [navigation]);
    return (
        <View>
            <Text>LoginScreen</Text>
        </View>
    );
};

export default LoginScreen;
