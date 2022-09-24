import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable, useColorScheme} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomLightColors} from '../assets/values/CustomColors';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import VideosScreen from '../screens/VideosScreen';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();




const RootNavigation = () => {
    const colorScheme = useColorScheme();

    useEffect(() => {
        console.log(colorScheme);
    }, [colorScheme]);

    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarActiveTintColor: CustomLightColors.activeIconColor,
                tabBarInactiveTintColor:
                    CustomLightColors.inActiveIconColor,

                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') iconName = 'home';
                    else if (route.name === 'Search') iconName = 'magnify';
                    else if (route.name === 'Videos')
                        iconName = 'play-circle';
                    else if (route.name === 'Profile')
                        iconName = 'account-circle';
                    return (
                        // <Pressable
                        //     style={({pressed}) => [
                        //         {
                        //             backgroundColor: pressed
                        //                 ? 'rgb(210, 230, 255)'
                        //                 : 'red',
                        //         },
                        //         {
                        //             height: 100,
                        //             width: 150,
                        //             borderRadius: 100,
                        //             // backgroundColor: 'red',
                        //             justifyContent: 'center',
                        //             alignItems: 'center',
                        //             zIndex: 1,
                        //         },
                        //     ]}
                        //     onPress={() => {}}>
                            <MaterialCommunityIcons
                                name={iconName}
                                color={color}
                                size={size}
                            />
                        // </Pressable>
                    );
                },

                tabBarStyle: {
                    height: 55,
                    paddingBottom: 5,
                    backgroundColor: CustomLightColors.bottomBarColor,
                    overflow: 'hidden',
                },
            })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Videos" component={VideosScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
