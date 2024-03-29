
import React, { createContext, useContext, useEffect, useState } from 'react';
//import { AsyncStorage } from 'react-native';
import client from '../apiRouter/client';


const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(false);
    const [callback, setCallBack] = useState(true);
    console.log("🚀 ~ file: LoginProvider.js ~ line 12 ~ LoginProvider ~ token", token)

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
                            setCallBack(true)
                        } else {
                            await client.post('/api/auth/logout')
                            setIsLoggedIn(false)
                            setCallBack(true)
                            //await AsyncStorage.removeItem('IsLogging')
                            //await AsyncStorage.removeItem('_token')
                        }

                    } else {
                        await client.post('/api/auth/logout')
                        setIsLoggedIn(false)
                        setCallBack(true)
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
            value={{ isLoggedIn, setIsLoggedIn, profile, setProfile, token, setToken,callback,setCallBack }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;