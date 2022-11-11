import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import client from '../../apiRouter/client'
import { useLogin } from '../../context/LoginProvider'
import bGStyles from '../../Styles/Background'
import Colors from '../../Styles/Colors'

const Businesses = () => {
    const {callback, setCallBack} = useLogin()
    const [isBokkMarked, setIsBoomarked] = useState(false)
    const [businesses, setBusinesses] = useState([])

    useEffect(() => {
        const getAllBusiness = async () => {
            try {
                const res = await client.get('/api/business/viewAll')
                setBusinesses(res.data)
                

                setCallBack(false)

            } catch (error) {
                console.log("🚀 ~ file: MyBusinesses.js ~ line 23 ~ getAllBusiness ~ error", error)

            }
        }
        if (callback) {
            getAllBusiness();

        }
    }, [callback])
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
            style={bGStyles.background}
        >
            <SafeAreaView style={{ marginTop: 20, flex: 1, }}>
                <View style={{ flex: 1, }}>
                    <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', marginLeft:10 }}>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Image source={require('../../../assets/homeIcons/filter.png')} style={{ marginRight: 5 }} />
                                <Text style={{ color: '#000', fontSize: 16 }}>Filter</Text>
                            </TouchableOpacity></View>
                        {/* <View>
                        <TextInput  style={styles.textInput} placeholder='Password' secureTextEntry={true}></TextInput>
                       </View> */}
                    </View>
                    <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <ScrollView>
                            <SafeAreaView style={{ marginBottom: 30 }}>
                                {
                                    businesses.map(m=>{
                                        return  <View key={m._id} style={[styles.card, styles.elevation]}>
                                        <View style={styles.ridesFriends}>
                                            <View style={styles.left}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Image source={require('../../../assets/homeIcons/office-building-icon.png')} style={{ marginRight: 5, width: 40, height: 40 }} />
                                                        <Text style={styles.cardTitle}>{m.business_name}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginLeft: 40 }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Status</Text>
                                                        <Text style={{ fontWeight: 'bold', marginRight: 5 }}>:</Text>
                                                        <Text style={{ marginRight: 5 }}>{m.status === 'hope_to_start' && 'Hope to start'}{m.status === 'started_as_new_business' && 'Started as a new business'}{m.status === 'Already_started' && 'Already Started (one month ago)'}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginLeft: 40 }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Category</Text>
                                                        <Text style={{ fontWeight: 'bold', marginRight: 5 }}>:</Text>
                                                        <Text style={{ marginRight: 5 }}>{m.category}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginLeft: 40 }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text style={{ fontWeight: 'bold', marginRight: 5 }}>Location</Text>
                                                        <Text style={{ fontWeight: 'bold', marginRight: 5 }}>:</Text>
                                                        <Text style={{ marginRight: 5 }}>{m.location}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={styles.verticleLine}></View>
                                            <View style={styles.right}>{isBokkMarked ? <Image source={require('../../../assets/homeIcons/bookmarked.png')} /> : <Image source={require('../../../assets/homeIcons/bookmark.png')} />}</View>
                                        </View>
                                    </View>
                                    })
                                }
                            </SafeAreaView>
                        </ScrollView>

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
        overflow: 'hidden',
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

export default Businesses