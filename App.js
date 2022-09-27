import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomColors} from './src/assets/values/CustomColors';
import {CustomFonts} from './src/assets/values/CustomFonts';
import { Strings } from './src/assets/values/Strings';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <View style={styles.Splash}>
                    <Text style={styles.Text}>{Strings.app_Name}</Text>
                </View>
            ) : (
                <RootNavigation />
            )}
        </>
    );
};

export default App;

const styles = StyleSheet.create({
    Splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CustomColors.primaryColor,
    },
    Text: {
        fontSize: 200,
        fontFamily: CustomFonts.Bold,
        color: CustomColors.black,
    },
});
