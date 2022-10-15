import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/AutStack/LoginScreen';
import OnBoardingScreen from '../screens/AutStack/OnBoardingScreen';
import SignupScreen from '../screens/AutStack/SignupScreen';

const AuthNavigationStack = createNativeStackNavigator();

export default AutStack = () => {
    return (
        <AuthNavigationStack.Navigator initialRouteName="ProfileScreen">
            <AuthNavigationStack.Screen
                name="OnBoarding"
                component={OnBoardingScreen}
            />
            <AuthNavigationStack.Screen name="Login" component={LoginScreen} />
            <AuthNavigationStack.Screen
                name="Signup"
                component={SignupScreen}
            />
        </AuthNavigationStack.Navigator>
    );
};
