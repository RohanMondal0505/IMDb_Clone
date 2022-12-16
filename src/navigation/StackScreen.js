import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileSecondScreen from '../screens/ProfileSecondScreen';
import SearchScreen from '../screens/SearchScreen';
import SectionListDisplayScreen from '../screens/SectionListDisplayScreen';

const Profile = createStackNavigator();
const Home = createStackNavigator();
const Search = createStackNavigator();

export const ProfileStackScreen = () => {
    return (
        <Profile.Navigator screenOptions={{headerShown: false}}>
            <Profile.Screen name="ProfileScreen" component={ProfileScreen} />
            <Profile.Screen
                name="ProfileSecondScreen"
                component={ProfileSecondScreen}
            />
        </Profile.Navigator>
    );
};
export const HomeStackScreen = () => {
    return (
        <Home.Navigator screenOptions={{headerShown: false}}>
            <Home.Screen name="HomeScreen" component={HomeScreen} />
            <Home.Screen
                name="SectionListDisplay"
                component={SectionListDisplayScreen}
            />
        </Home.Navigator>
    );
};
export const SearchStackScreen = () => {
    return (
        <Search.Navigator screenOptions={{headerShown: false}}>
            <Search.Screen name="SearchScreen" component={SearchScreen} />
            <Home.Screen
                name="SectionListDisplay"
                component={SectionListDisplayScreen}
            />
        </Search.Navigator>
    );
};
