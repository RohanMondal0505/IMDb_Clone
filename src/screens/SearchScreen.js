import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

const SearchScreen = () => {
    const {colors} = useTheme();
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.mainBackgroundColor,
            }}>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: 'center',
                    paddingVertical: 20,
                }}>
                Search Screen
            </Text>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: 'center',
                    paddingVertical: 20,
                }}>
                Working on this Screen
            </Text>
        </View>
    );
};

export default SearchScreen;
