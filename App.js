import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { CustomColors } from './src/assets/values/CustomColors';

const api_key = '8894618af4b86f3c23dd27487dd2be5a';
const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`;

const App = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    const TMDb = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTrendingMovies(data.results);
        } catch (error) {
            console.log("Errors: => ",error.message)
        }
    };    

    useEffect(() => {
        TMDb();
    }, []);

    return (
        <View style={{flex: 1, backgroundColor: CustomColors.secondaryColor}}>
            <StatusBar
                backgroundColor={CustomColors.primaryColor}
          barStyle="dark-content"
            />
            <Text
                style={{
                    color: CustomColors.white,
                    fontSize: 35,
                    fontWeight: '700',
                    textAlign: 'center',
                }}>
                {' '}
                Trending Movies of this Week
            </Text>
            <ScrollView>
                {trendingMovies.map((item, index) => (
                    <Text
                        key={index}
                        style={{
                            color: CustomColors.primaryColor,
                            fontSize: 18,
                            lineHeight: 40,
                        }}>
                        *{' '}
                        {item.original_title == undefined
                            ? item.name
                            : item.original_title}
                    </Text>
                ))}
            </ScrollView>
        </View>
    );
};

export default App;
