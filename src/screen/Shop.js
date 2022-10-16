import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import bGStyles from '../Styles/Background';
import Colors from '../Styles/Colors'

const Shop = () => {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
            style={bGStyles.background}
        >
            <SafeAreaView style={styles.mainContainer}>
                <View>
                    <Text>Shop</Text>
                </View>
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

})


export default Shop