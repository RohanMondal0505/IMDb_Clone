import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Account from '../screens/Account';
import ProfileScreen from '../screens/ProfileScreen';

const Profile = createStackNavigator();

export const ProfileStackScreen = () => {
    return (
        <Profile.Navigator screenOptions={{headerShown: false}}>
            <Profile.Screen name="ProfileScreen" component={ProfileScreen} />
            <Profile.Screen name="Account" component={Account} />
        </Profile.Navigator>
    );
};
