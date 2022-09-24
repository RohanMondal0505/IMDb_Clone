import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import { useColorScheme } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import VideosScreen from '../screens/VideosScreen';




const Tab = createMaterialBottomTabNavigator();

const RootNavigation = () => {
    const colorScheme = useColorScheme();

    useEffect(() => {
        console.log(colorScheme)
    }, [colorScheme]);

    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Videos" component={VideosScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
