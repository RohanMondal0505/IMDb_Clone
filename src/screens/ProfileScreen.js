import {useTheme} from '@react-navigation/native';
import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import HeaderSection from '../components/profileContent/HeaderSection';
import UserButtons from '../components/profileContent/UserButtons';

const ProfileScreen = ({navigation}) => {
    const {colors} = useTheme();

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
                <HeaderSection />
                <UserButtons navigation={navigation} />
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
