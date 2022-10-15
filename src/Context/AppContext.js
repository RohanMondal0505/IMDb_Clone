import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';

const AppContext = createContext();
let data = {
    id: 2250,
    name: 'Rohan Mondal',
    email: 'rohanmondal@gmail.com',
};
export const AppProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const setUserData = async (data) => {
        await AsyncStorage.setItem('user', JSON.stringify(data));
    };

    const getUserData = async () => {
        const result = await AsyncStorage.getItem('user');
        result != null ? setUser([JSON.parse(result)]) : null;
    };

    useEffect(() => {
        // setUserData(data);
        getUserData();
        // AsyncStorage.clear();
    }, []);

    return (
        <AppContext.Provider value={{user, setUser}}>
            {children}
        </AppContext.Provider>
    );
};
export const GlobalVariables = () => useContext(AppContext);
