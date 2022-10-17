import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {useTheme} from '@react-navigation/native';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const {colors} = useTheme();
    const [user, setUser] = useState(null);

    const setUserDataInAsyncStorage = async data => {
        try {
            await AsyncStorage.setItem('UserData', JSON.stringify(data));
        } catch (error) {
            console.log('AsyncStorage Save data=> ', error.message);
        }
    };

    const showUserData = async () => {
        try {
            let response = await AsyncStorage.getItem('UserData');
            setUser(JSON.parse(response));
        } catch (error) {
            console.log('Error in AsyncStorage => ', error.message);
        }
    };

    useEffect(() => {
        showUserData();
    }, []);

    const customAlert = (title, text) => {
        Alert.alert(title, text, [
            {text: 'OK', onPress: () => console.log('Error => ', text)},
        ]);
    };

    const login = async (email, password) => {
        try {
            if (email == '' || email == null || email == undefined)
                throw 'email empty';
            if (password == '' || password == null || password == undefined)
                throw 'password empty';
            await auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            if (error.code === 'auth/weak-password')
                customAlert(
                    'Error !!',
                    'Password should be at least 6 characters',
                );
            else if (error.code === 'auth/wrong-password')
                customAlert('Error !!', 'Wrong Password!');
            else if (error.code === 'auth/invalid-email')
                customAlert('Error !!', 'Invalid Email!');
            else if (error.code === 'auth/user-not-found')
                customAlert('Warning !!', 'This User Does not Present!');
            else if (error === 'email empty')
                customAlert('Warning !!', 'Email is Empty, Please Fill in');
            else if (error === 'password empty')
                customAlert('Warning !!', 'Password is Empty, Please Fill in');
            else console.log(error);
        }
    };

    const register = async (email, password) => {
        try {
            if (email == '' || email == null || email == undefined)
                throw 'email empty';
            if (password == '' || password == null || password == undefined)
                throw 'password empty';
            await auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use')
                customAlert('Warning !!', 'Email Already Present');
            else if (error.code === 'auth/weak-password')
                customAlert(
                    'Error !!',
                    'Password should be at least 6 characters',
                );
            else if (error.code === 'auth/invalid-email')
                customAlert('Error !!', 'Invalid Email!');
            else if (error === 'email empty')
                customAlert('Warning !!', 'Email is Empty, Please Fill in');
            else if (error === 'password empty')
                customAlert('Warning !!', 'Password is Empty, Please Fill in');
            else customAlert(error);
        }
    };

    const logout = async () => {
        try {
            await auth().signOut();
            setUser(null);
            await AsyncStorage.setItem('UserData', JSON.stringify(null));
        } catch (error) {
            customAlert(error);
            console.log('Logout Error => ', error.message);
        }
    };

    return (
        <AppContext.Provider
            value={{
                colors,
                user,
                setUser,
                setUserDataInAsyncStorage,
                customAlert,
                login,
                register,
                logout,
            }}>
            {children}
        </AppContext.Provider>
    );
};
export const GlobalVariables = () => useContext(AppContext);
