import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Alert, AsyncStorage, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Colors from '../../Styles/Colors'
import bGStyles from '../../Styles/Background'
import { useNavigation } from '@react-navigation/native'
import client from '../../apiRouter/client'


function ResetPassword() {
    const [password, setPassword] = React.useState('')
    const [cPassword, setCPassword] = React.useState('')


    const resetPassword = async (e) => {
        e.preventDefault();
        if (!password || !cPassword) {
            Alert.alert(
                'Fill All the Fields !',)
        } else {
            try {
                // const res = await client.post('api/user/resetPassword', { password , cPassword })

                Navigator.navigate('Login');

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
                            <View style={{ marginTop: 25 }} />

                            <View style={styles.formInput}>
                                <TextInput onChangeText={setPassword} style={styles.textInput} placeholder='Password' secureTextEntry={true}></TextInput>
                            </View>
                            <View style={styles.formInput}>
                                <TextInput onChangeText={setCPassword} style={styles.textInput} placeholder='Conform Password' secureTextEntry={true}></TextInput>
                            </View>
                            <View style={styles.formInput}>
                                <TouchableOpacity onPress={resetPassword} style={styles.defaultButton}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Reset Password </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default ResetPassword

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
        paddingStart: 20,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#10006b',
        color: '#000',
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    defaultButton: {
        padding: 15,
        backgroundColor: '#FF6D27',
        borderRadius: 50,
    },


})