import {useTheme} from '@react-navigation/native';
import React, { useState } from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const PlusButton = () => {
    const {colors} = useTheme();
    const [icon, setIcon] = useState(false);

    return (
        <Pressable
            onPress={() => setIcon(!icon)}
            style={{
                height: 45,
                width: 40,
                backgroundColor: icon
                    ? colors.primaryColor
                    : colors.plusIconBackgroundColor,
                position: 'absolute',
                top: 0,
                left: 0,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10,
            }}>
            <View
                style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    transform: [{rotate: '180deg'}],
                    borderStyle: 'solid',
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 10,
                    borderLeftWidth: 20,
                    borderTopColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderBottomColor: icon
                        ? colors.primaryColor
                        : colors.plusIconBackgroundColor,
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    bottom: -10,
                    right: 0,
                    transform: [{rotate: '180deg'}],
                    borderStyle: 'solid',
                    borderTopWidth: 0,
                    borderRightWidth: 20,
                    borderBottomWidth: 10,
                    borderLeftWidth: 0,
                    borderTopColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderBottomColor: icon
                        ? colors.primaryColor
                        : colors.plusIconBackgroundColor,
                }}
            />
            {icon ? (
                <Icon name="check" size={25} color={colors.black} />
            ) : (
                <Icon name="plus" size={25} color={colors.white} />
            )}
        </Pressable>
    );
};

export default PlusButton;
