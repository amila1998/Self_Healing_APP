import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import LoginProvider from './src/context/LoginProvider';
import Main from './src/Main';


export default function App() {

  return (
    <LoginProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </LoginProvider>


  );
}
