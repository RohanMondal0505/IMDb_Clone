import { useTheme } from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({ navigation }) => {
    const {colors} = useTheme();
    
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.mainBackgroundColor,
            }}>
            <Text style={{color: colors.textColor}}>HomeScreen</Text>
            <FontAwesome5 name="user-alt" color={'red'} size={50} />
            <FontAwesome5 name="user-circle" color={'red'} size={50} />
            <FontAwesome name="user-circle" color={'red'} size={50} />
        </View>
    );
};

export default HomeScreen;
