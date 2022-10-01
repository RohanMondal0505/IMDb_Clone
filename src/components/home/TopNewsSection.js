import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Strings } from '../../assets/values/Strings';
import TitleContainer from '../Custom/TitleContainer';

const TopNewsSection = () => {
    const {colors} = useTheme();

    const styles = StyleSheet.create({
        Container: {
            marginTop: 15,
            backgroundColor: colors.componentsBackgroundColor,
            padding: 10,
            elevation: 5,
        },
    });

    return (
        <View style={styles.Container}>
            <TitleContainer title={Strings.Top_News} />
        </View>
    );
};

export default TopNewsSection;

const styles = StyleSheet.create({});
