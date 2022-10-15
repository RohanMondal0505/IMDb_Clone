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
import {GlobalVariables} from '../Context/AppContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

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

const Routes = () => {
    const colorScheme = useColorScheme();
    const {user} = GlobalVariables();
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? customDarkTheme : customLightTheme}>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Routes;
