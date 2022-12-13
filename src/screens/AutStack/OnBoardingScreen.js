import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
    const Done = ({...props}) => (
        <TouchableOpacity {...props} style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Done</Text>
        </TouchableOpacity>
    );

    return (
        <Onboarding
            DoneButtonComponent={Done}
            onSkip={() => navigation.replace('LoginRoutes')}
            onDone={() => navigation.navigate('LoginRoutes')}
            pages={[
                {
                    backgroundColor: '#F5C518',
                    image: (
                        <Image
                            source={require('../../assets/images/IMDb_App_Icon.png')}
                            style={{height: 200, width: 200}}
                        />
                    ),
                    title: (
                        <Text
                            style={{
                                fontSize: 30,
                                fontWeight: '600',
                                color: 'rgba(0,0,0,0.8)',
                            }}>
                            Welcome
                        </Text>
                    ),
                    subtitle: 'Hope you like it',
                },
                {
                    backgroundColor: '#F5C518',
                    image: (
                        <Image
                            source={require('../../assets/images/IMDb_App_Icon.png')}
                            style={{height: 200, width: 200}}
                        />
                    ),
                    title: 'Movie Rating App',
                    subtitle: 'You can see all movie rating all over the world',
                },
            ]}
        />
    );
};

export default OnBoardingScreen;
