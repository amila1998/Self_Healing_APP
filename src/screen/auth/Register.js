import React from 'react'
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Colors from '../../Styles/Colors'
import SelectList from 'react-native-dropdown-select-list'
import GenderData from '../../Data/Gender'
import RolesData from '../../Data/Roles'
import { LinearGradient } from 'expo-linear-gradient'
import bGStyles from '../../Styles/Background'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
    const [gender, setGender] = React.useState('');
    const [role, setRole] = React.useState('');
    const [email, setEmail] = React.useState('')
    const [fName, setFName] = React.useState('')
    const [LName, setLName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [cPassword, setPCassword] = React.useState('')
    const Navigator = useNavigation();
   
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
                                <TextInput style={styles.textInput} placeholder='Email'></TextInput>
                            </View>
                            <View style={styles.formInput}>
                                <TextInput style={styles.textInput} placeholder='First Name'></TextInput>
                            </View>
                            <View style={styles.formInput}>
                                <TextInput style={styles.textInput} placeholder='Last Name'></TextInput>
                            </View>
                            <View style={styles.formInput}>
                                <SelectList search={false} dropdownStyles={{ backgroundColor: '#fff' }} boxStyles={styles.textInput} setSelected={setGender} data={GenderData} placeholder='Gender' />
                            </View>
                            <View style={styles.formInput}>
                                <SelectList search={false} dropdownStyles={{ backgroundColor: '#fff' }} boxStyles={styles.textInput} setSelected={setRole} data={RolesData} placeholder='Role' />
                            </View>
                            <View style={styles.formInput}>
                                <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true}></TextInput>
                            </View>
                            <View style={styles.formInput}>
                                <TextInput style={styles.textInput} placeholder='Conform Password' secureTextEntry={true}></TextInput>
                            </View>
                            <View style={styles.formInput}>
                                <TouchableOpacity style={styles.defaultButton}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Register</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.formInput}>
                                <TouchableOpacity onPress={navigateLogin}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Have Account ? Login Now</Text>
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

export default Register