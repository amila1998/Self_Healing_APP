import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet} from 'react-native';
import MainTabScreen from './src/router/MainTabScreenRoute';
import RootStackScreen from './src/router/RootStackScreensRoute';
import bGStyles from './src/Styles/Background';
import Colors from './src/Styles/Colors';

export default function App() {
  const [isLoggin, setIsLoggin] = React.useState(true)
  return (
    <NavigationContainer>
{
  !isLoggin?<RootStackScreen/>:<MainTabScreen/>
}
</NavigationContainer>
      
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
