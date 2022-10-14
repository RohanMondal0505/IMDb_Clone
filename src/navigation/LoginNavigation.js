import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const LoginStack = createNativeStackNavigator();

export default LoginNavigation = () => {
    return (
        <LoginStack.Navigator initialRouteName="ProfileScreen">
            <LoginStack.Screen name="Login" component={LoginScreen} />
            <LoginStack.Screen name="Signup" component={SignupScreen} />
        </LoginStack.Navigator>
    );
};
