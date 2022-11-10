import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import bGStyles from '../../Styles/Background'
import Colors from '../../Styles/Colors'

const Businesses = () => {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
            style={bGStyles.background}
        >
            <SafeAreaView style={{ marginTop: 20, flex:1 }}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../../../assets/homeIcons/filter.png')} style={{marginRight:5}}/>
                    <Text>Filter</Text>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Businesses