import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screen/Home";
import Register from "../screen/auth/Register";
import Splash from "../screen/splash/Splash";
import Login from "../screen/auth/Login";
import Forgot from "../screen/auth/Forgot";
import ResetPassword from "../screen/auth/ResetPassword";
import MainTabScreen from "./MainTabScreenRoute";
import AddReview from "../screen/reviews/AddReview";
import EditReview from "../screen/reviews/EditReview";
import Product from "../screen/product/Product";
import Reviews from "../screen/reviews/Reviews";
import Buy from "../screen/product/Buy";
const Stack = createNativeStackNavigator();


const RootStackScreen = () => {
    return (
      
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
                <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Main" component={MainTabScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Forgot" component={Forgot} />
                <Stack.Screen options={{ headerShown: false }} name="ResetPassword" component={ResetPassword} />
                <Stack.Screen options={{ headerShown: true }} name="AddReview" component={AddReview} />
                <Stack.Screen options={{ headerShown: true }} name="EditReview" component={EditReview} />
                <Stack.Screen options={{ headerShown: true }} name="Reviews" component={Reviews} />
                <Stack.Screen options={{ headerShown: true }} name="Product" component={Product} />
                <Stack.Screen options={{ headerShown: true }} name="Buy" component={Buy} />
            </Stack.Navigator>
   
    )
}

export default RootStackScreen