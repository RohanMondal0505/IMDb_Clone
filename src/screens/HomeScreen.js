import {useNetInfo} from '@react-native-community/netinfo';
import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';
import {Strings} from '../assets/values/Strings';
import ConnectionLostView from '../components/home/ConnectionLostView';
import MoviesSlider from '../components/home/MoviesSlider';
import PopularSection from '../components/home/PopularSection';

const HomeScreen = ({navigation}) => {
    const {colors} = useTheme();
    const netInfo = useNetInfo();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 3000);
    }, []);

    const styles = StyleSheet.create({
        MainContainer: {
            flex: 1,
            backgroundColor: colors.mainBackgroundColor,
        },
        container: {
            flex: 1,
            paddingTop: 10,
            // borderColor: 'red',
            // borderWidth: 1,
        },
    });

    return (
        <SafeAreaView style={styles.MainContainer}>
            {netInfo.isInternetReachable ? (
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            tintColor={colors.primaryColor}
                            colors={[
                                colors.primaryColor,
                                colors.headingTextColor,
                            ]}
                        />
                    }
                    contentContainerStyle={styles.container}>
                    <MoviesSlider />
                    <PopularSection title={Strings.Popular_Movies} />
                    {/* <PopularSection title={Strings.Popular_TV}/> */}
                </ScrollView>
            ) : (
                <ConnectionLostView />
            )}
        </SafeAreaView>
    );
};

export default HomeScreen;
