import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import { CustomColors } from '../../assets/values/CustomColors';

const Loader = () => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.5)',
                height: '100%',
                width: '100%',
                zIndex: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <ActivityIndicator size={100} color={CustomColors.primaryColor} />
        </View>
    );
};

export default Loader;
