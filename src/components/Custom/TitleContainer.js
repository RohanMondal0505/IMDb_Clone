import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Strings} from '../../assets/values/Strings';

const TitleContainer = props => {
    const {colors} = useTheme();
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <View
                style={{
                    width: 4,
                    height: 24,
                    backgroundColor: colors.primaryColor,
                    borderRadius: 5,
                    marginRight: 5,
                }}
            />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 0,
                }}>
                <Text
                    style={{
                        color: colors.textColor,
                        fontSize: 22,
                        fontFamily: CustomFonts.Bold,
                    }}>
                    {props.title}
                </Text>
                <Text
                    onPress={() => console.log(title)}
                    style={{
                        color: colors.headingTextColor,
                        fontSize: 14,
                        fontFamily: CustomFonts.Regular,
                        paddingRight: 10,
                    }}>
                    {Strings.SEE_ALL}
                </Text>
            </View>
        </View>
    );
};

export default TitleContainer;
