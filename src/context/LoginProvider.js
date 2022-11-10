
import React, { createContext, useContext, useEffect, useState } from 'react';
//import { AsyncStorage } from 'react-native';
import client from '../apiRouter/client';


const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(false);

    const [profile, setProfile] = useState({});
    console.log("🚀 ~ file: LoginProvider.js ~ line 14 ~ LoginProvider ~ profile", profile)




    useEffect(() => {
        const getUserDetails = async () => {
            // const _isLoggin = await AsyncStorage.getItem('IsLogging')
            // const _token = await AsyncStorage.getItem('_token');
            // if (_isLoggin) {
            //     setIsLoggedIn(true);
            //     if (_token) {
            //         setToken(_token)
                    if (isLoggedIn) {
                        if (token) {
                            const res = await client.get('/api/auth/infor',{
                                headers: { Authorization: token }
                            })
                            setProfile(res.data)
                        } else {
                            await client.post('/api/auth/logout')
                            setToken(false)
                            setIsLoggedIn(false)
                            //await AsyncStorage.removeItem('IsLogging')
                            //await AsyncStorage.removeItem('_token')
                        }

                    } else {
                        await client.post('/api/auth/logout')
                        setToken(false)
                        setIsLoggedIn(false)
                        //await AsyncStorage.removeItem('IsLogging')
                        //await AsyncStorage.removeItem('_token')
                    }
            //     } else {
            //         await client.post('/api/auth/logout')
            //         setToken(false)
            //         setIsLoggedIn(false)
            //         await AsyncStorage.removeItem('IsLogging')
            //         await AsyncStorage.removeItem('_token')
            //     }
            // } else {
            //     await client.post('/api/auth/logout')
            //     setIsLoggedIn(false)
            //     await AsyncStorage.removeItem('IsLogging')
            //     await AsyncStorage.removeItem('_token')
            // }

        }
        if (isLoggedIn) {
            getUserDetails();
        }
    }, [isLoggedIn, token])


    return (
        <LoginContext.Provider
            value={{ isLoggedIn, setIsLoggedIn, profile, setProfile, token, setToken, }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;