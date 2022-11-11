import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Alert, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Colors from '../../Styles/Colors'
import bGStyles from '../../Styles/Background'
import { useNavigation } from '@react-navigation/native'
import client from '../../apiRouter/client'
import { useLogin } from '../../context/LoginProvider'
// import PasswordInputText from 'react-native-hide-show-password-input';

const Login = () => {
    const { setIsLoggedIn, setToken } = useLogin();
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [showPassword, setshowPassword] = useState(true)
    const Navigator = useNavigation();

    const navigateRegister = () => {
        Navigator.navigate('Register')
    }

    const navigateForgotPassword = () => {
        Navigator.navigate('Forgot')
    }

    const toggleSwitch=()=> {
        setshowPassword(!showPassword);
      }


    const login = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            Alert.alert(
                'Fill All the Fields !',)
        } else {
            try {
                const res = await client.post('api/user/signing', { email, password })
                // await AsyncStorage.setItem(
                //     'IsLogging', true)
                // await AsyncStorage.setItem(
                //     '_token', res.data.token)

                setIsLoggedIn(true)
                setToken(res.data.token)
                Navigator.navigate('Main');

            } catch (error) {
                console.log("🚀 ~ file: Login.js ~ line 27 ~ login ~ error", error)
                Alert.alert(
                    error.response.data.message,)
            }
        }

    }

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
            style={bGStyles.background}
        >
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView>
                    <View>
                        <View style={styles.container}>
                            <Image resizeMode={'contain'} style={styles.defultBg} source={require('../../../assets/cg.png')} />
                        </View>
                        <View style={styles.container}>
                            <Image resizeMode={'contain'} source={require('../../../assets/SELFHEALING.png')} />
                        </View>
                        <View style={styles.container}>
                            <Image resizeMode={'contain'} source={require('../../../assets/STAYWITHNOPOVERTY.png')} />
                        </View>
                        <View style={styles.loginBody}>
                            <View style={styles.formInput}>
                                <TextInput keyboardType='email-address' onChangeText={setEmail} style={styles.textInput} placeholder='Email'></TextInput>
                            </View>
                            <View style={styles.formInput}>
                                <TextInput onChangeText={setPasword} style={styles.textInput} placeholder='Password' secureTextEntry={!showPassword?false:true}></TextInput>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Switch
                                    onValueChange={toggleSwitch}
                                    value={!showPassword}
                                />
                                 <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Show Password</Text>
                                </View>
                               
                            </View>
                            <View style={styles.formInput}>
                                <TouchableOpacity onPress={login} style={styles.defaultButton}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.formInput}>
                                <TouchableOpacity onPress={navigateForgotPassword}>
                                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Forgot Password</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.formInput}>
                                <TouchableOpacity onPress={navigateRegister}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Need Account ? Register Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 18,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        marginBottom: 5,
    },
    defultBg: {
        width: '100%',
        height: 150
    },
    loginBody: {
        padding: 10
    },
    formInput: {
        marginBottom: 10,
        padding: 10,
    },
    textInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#10006b',
        color: '#10006b',
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    defaultButton: {
        padding: 15,
        backgroundColor: '#FF6D27',
        borderRadius: 50,
    },


})

export default Login