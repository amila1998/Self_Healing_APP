import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet} from 'react-native';
import AppRouter from './src/router/router';
import bGStyles from './src/Styles/Background';
import Colors from './src/Styles/Colors';

export default function App() {

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
      style={bGStyles.background}
    >
      <AppRouter />
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
