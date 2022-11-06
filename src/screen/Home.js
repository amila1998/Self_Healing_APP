import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

import { StyleSheet, Text, View, Button, SafeAreaView, ScrollViewComponent, ScrollView, Image } from 'react-native';
import bGStyles from '../Styles/Background';
import Colors from '../Styles/Colors'

const Home = () => {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
            style={bGStyles.background}
        >
            <SafeAreaView>
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