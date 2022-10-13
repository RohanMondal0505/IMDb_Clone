import {useTheme} from '@react-navigation/native';
import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';

const ProfileScreen = () => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        MainContainer: {
            flex: 1,
            backgroundColor: colors.mainBackgroundColor,
        },
        container: {
            width: '100%',
            paddingTop: 8,
            paddingBottom: 30,
        },
    });
    return (
       <SafeAreaView style={styles.MainContainer}>
            <Text>ProfileScreen</Text>
        </SafeAreaView>
    );
};

export default ProfileScreen;
