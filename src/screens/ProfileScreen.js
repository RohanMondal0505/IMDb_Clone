import {useTheme} from '@react-navigation/native';
import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HeaderSection from '../components/Profile/HeaderSection';
import Buttons from '../components/Profile/Buttons';

const ProfileScreen = () => {
    const { colors } = useTheme();
    
    const styles = StyleSheet.create({
        MainContainer: {
            flex: 1,
            backgroundColor: colors.mainBackgroundColor,
        },
        Container: {
            width: '100%',
        },
    });

    return (
        <SafeAreaView style={styles.MainContainer}>
            <View style={styles.Container}>
                <HeaderSection name="Rohan" />
                <Buttons/>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
