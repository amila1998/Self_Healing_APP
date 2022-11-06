import React from 'react'
import { useLogin } from './context/LoginProvider';
import MainTabScreen from './router/MainTabScreenRoute';
import RootStackScreen from './router/RootStackScreensRoute';

const Main = () => {
    const { isLoggedIn, token, profile } = useLogin();
    return (
        <>
            <RootStackScreen />
          

        </>
    )
}

export default Main