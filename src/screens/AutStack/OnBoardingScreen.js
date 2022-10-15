import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
    return (
        <Onboarding
            onSkip={() => navigation.navigate('Login')}
            onDone={() => navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../assets/images/IMDb_App_Icon.png')} />,
                    title: 'Onboarding 1',
                    subtitle: 'React Native',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../assets/images/IMDb_App_Icon.png')} />,
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    );
};

export default OnBoardingScreen;
