import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLogin } from '../context/LoginProvider';
import bGStyles from '../Styles/Background';
import Colors from '../Styles/Colors'
import { useNavigation } from '@react-navigation/native'
import client from '../apiRouter/client';
const Profile = () => {
    const { profile,setCallBack } = useLogin();
    const Navigator = useNavigation();

    const logout =async()=>{
        try {
            await client.post('/api/auth/logout')
            Navigator.navigate('Login')
        } catch (error) {
            console.log("🚀 ~ file: Profile.js ~ line 17 ~ logout ~ error", error)
            
        }
    }
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
            style={bGStyles.background}
        >
            <SafeAreaView style={{ marginTop: 20, flex: 1, }}>
                <View style={{ flex: 1, }}>
                    <View style={{ padding: 10, flexDirection: 'row' , elevation: 20, shadowColor: '#000',backgroundColor:'none'}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/profileIcons/user-circle_xkddog.png')} style={{ width: 100, height: 100, }} />
                        </View>

                        <View style={{ marginTop: 20, marginBottom: 20 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 40 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>First Name</Text>
                                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>:</Text>
                                    <Text style={{ marginRight: 5 }}>{profile.first_name}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 40 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Last Name</Text>
                                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>:</Text>
                                    <Text style={{ marginRight: 5 }}>{profile.last_name}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 40 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Email</Text>
                                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>:</Text>
                                    <Text style={{ marginRight: 5 }}>{profile.email}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 40 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Gender</Text>
                                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>:</Text>
                                    <Text style={{ marginRight: 5 }}>{profile.gender}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 40 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Role</Text>
                                    <Text style={{ fontWeight: 'bold', marginRight: 5 }}>:</Text>
                                    <Text style={{ marginRight: 5 }}>{profile.role}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 1, width:'100%', backgroundColor: '#36455A'}}>

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                            <SafeAreaView style={{ marginBottom: 30 }}>
                        <ScrollView style={{ marginBottom: 100 }}>
                            <View style={{ flex: 1 , margin:20}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity onPress={()=>{Navigator.navigate('MyBusinesses'); setCallBack(true)}}>
                                    <Image source={require('../../assets/profileIcons/MyBusinesses.png')} style={{ width:110 ,height:110}}/>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>My Businesses</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity onPress={()=>Navigator.navigate('Reviews')}>
                                    <Image source={require('../../assets/profileIcons/MyReviews.png')} style={{ width:115 ,height:115}}/>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>My Reviews</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/profileIcons/MyDonets.png')} style={{ width:110 ,height:110}}/>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>My Donets</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/profileIcons/MyInvesments.png')} style={{ width:120 ,height:120}}/>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>My Invesments </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/profileIcons/MyAdvises.png')} style={{ width:110 ,height:110}}/>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>My Advises</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/profileIcons/MyBookmarks.png')} style={{ width:110 ,height:110}}/>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>My Bookmarks</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/homeIcons/settings.png')} />
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Settings</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity onPress={logout}>
                                    <Image source={require('../../assets/profileIcons/Signout.png')} style={{ width:110 ,height:110}}/>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Sign Out</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                        </ScrollView>
                            </SafeAreaView>

                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    cardTitle: {
        color: '#36455A',
        fontSize: 20,
        fontWeight: 'bold',
    },
    ridesFriends: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    left: {
        width: '80%',
    },
    right: {
        width: '18%',
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    },
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
        width: 100,
        padding: 2,
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
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
        margin: 10,
        height: 140,
        maxHeight: 140
    },
    elevation: {
        elevation: 10,
        shadowColor: '#000',
    },
})


export default Profile