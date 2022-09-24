import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {
    CustomDarkColors,
    CustomLightColors,
} from '../assets/values/CustomColors';
import BottomTabs from './BottomTabs';

const customDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        ...CustomDarkColors,
    },
};

const customLightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...CustomLightColors,
    },
};

const RootNavigation = () => {
    const colorScheme = useColorScheme();

    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? customDarkTheme : customLightTheme}>
            <BottomTabs />
        </NavigationContainer>
    );
};

export default RootNavigation;
