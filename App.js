import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/auth/Login';

import Home from './src/screen/Home';
import bGStyles from './src/Styles/Background';
import Colors from './src/Styles/Colors';

export default function App() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[Colors.light.white, Colors.light.lightBlue,Colors.light.lightBlue, Colors.light.darkBlue]}
      style={bGStyles.background}
    >
      <Login/>
    </LinearGradient>

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
