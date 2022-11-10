import React from 'react'
import { useLogin } from './context/LoginProvider';
import MainTabScreen from './router/MainTabScreenRoute';
import RootStackScreen from './router/RootStackScreensRoute';
import Product from './screen/product/Product';
import AddReview from './screen/reviews/AddReview';
import EditReview from './screen/reviews/EditReview';
import Reviews from './screen/reviews/Reviews';

const Main = () => {
    const { isLoggedIn, token, profile } = useLogin();
    return (
        <>
            <RootStackScreen />
          

        </>
    )
}

export default Main