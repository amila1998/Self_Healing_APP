import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, View } from 'react-native'
import { useLogin } from '../../context/LoginProvider'
import bGStyles from '../../Styles/Background'
import Colors from '../../Styles/Colors'

const Splash = () => {
    const { isLoggedIn} = useLogin();
    const [isGo, setisGo] = React.useState(true)
    const navigation = useNavigation();

    React.useEffect(() => {
        if (isGo) {
            setTimeout(() => {
                if (isLoggedIn) {
                    navigation.navigate('Main');
                }else{
                    navigation.navigate('Login');
                }
                setisGo(false)
            }, 2000)
        }
    }, [isGo,isLoggedIn])
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
            style={bGStyles.background}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Image resizeMode={'contain'} style={{ width: 200, height: 200 }} source={require('../../../assets/logo.png')} />
                </View>
            </View>
        </LinearGradient>
    )
}

export default Splash