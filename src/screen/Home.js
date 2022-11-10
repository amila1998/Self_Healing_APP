import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

import { StyleSheet, Text, View, Button, SafeAreaView, ScrollViewComponent, ScrollView, Image, TouchableOpacity } from 'react-native';
import bGStyles from '../Styles/Background';
import Colors from '../Styles/Colors'

const Home = () => {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
            style={bGStyles.background}
        >
            <SafeAreaView style={{ marginTop: 20 }}>
                <ScrollView>
                    <View>
                        <View style={styles.container}>
                            <Image resizeMode={'contain'} style={styles.defultBg} source={require('../../assets/cg.png')} />
                        </View>
                        <View style={styles.container}>
                            <Image resizeMode={'contain'} source={require('../../assets/SELFHEALING.png')} />
                        </View>
                        <View style={styles.container}>
                            <Image resizeMode={'contain'} source={require('../../assets/STAYWITHNOPOVERTY.png')} />
                        </View>

                    </View>
                    <View style={{ flex: 1 , margin:20}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/homeIcons/shop.png')} />
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Shop</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/homeIcons/business.png')} />
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Businesses</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/homeIcons/Investorgigs.png')} />
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Investor’s gigs</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/homeIcons/Advisorgigs.png')} />
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Advisor’s gigs</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/homeIcons/contactus.png')} />
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Contact us</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', margin: 15 }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/homeIcons/settings.png')} />
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Settings</Text>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dummyText: {
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

})


export default Home