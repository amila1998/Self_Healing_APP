import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screen/Home";
import Register from "../screen/auth/Register";
import Splash from "../screen/splash/Splash";
import Login from "../screen/auth/Login";
const Stack = createNativeStackNavigator();


const RootStackScreen = () => {
    return (
      
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            </Stack.Navigator>
   
    )
}

export default RootStackScreen