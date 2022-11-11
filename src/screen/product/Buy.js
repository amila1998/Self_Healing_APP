import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import bGStyles from '../../Styles/Background';
import Colors from '../../Styles/Colors';
import client from '../../apiRouter/client'
import { useLogin } from '../../context/LoginProvider';

function Buy({ navigation, route }) {

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
            style={bGStyles.background}
        >

            <View>

                <Image style={[stylesheet.styleOnlinePaymentFormMockupTemplateDesignFreePsd21, { transform: [{ rotate: "0deg" }] }]} source={{ uri: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/WhMBeDFzWaVPjjxzD9lRk8Tp.jpeg" }} />

                <Text style={stylesheet.styleCardNumber}>
                    {`Card Number`}
                </Text>
                <Text style={stylesheet.styleExpirationDate}>
                    {`Expiration date `}
                </Text>
                {/* <Button style={[stylesheet.stylePayNow , {marginTop : 20}]} title="Pay Now">
                </Button> */}
                <Text style={stylesheet.styleCvv}>
                    {`cvv`}
                </Text>

                <View style={stylesheet.styleVector}>

                </View>
                <View style={stylesheet.styleVectorCopy1}>

                </View>
                <View style={stylesheet.styleVectorCopy2}>

                </View>
                <View style={stylesheet.styleVectorCopy3}>

                </View>
                <View style={stylesheet.styleVectorCopy4}>

                </View>
                <View style={stylesheet.styleLine1}>

                </View>
                <View style={stylesheet.styleArrow1}>

                </View>
            </View>
        </LinearGradient>
    )
}

export default Buy

const stylesheet = StyleSheet.create({
    styleRectangle1303: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 377,
        height: 444,
        borderRadius: 20,
    },
    styleRectangle1291: {
        position: "absolute",
        left: 8,
        top: 255,
        width: 217,
        height: 32,
        borderRadius: 50,
    },
    styleOnlinePaymentFormMockupTemplateDesignFreePsd21: {
        position: "absolute",
        left: 225,
        top: 75,
        borderRadius: null,
        width: 152,
        height: 251,
    },
    styleRectangle1293: {
        position: "absolute",
        left: 8,
        bottom: 268,
        width: 217,
        height: 31,
        borderRadius: 150,
    },
    styleRectangle1294: {
        position: "absolute",
        left: 8,
        bottom: 219,
        width: 124,
        height: 25,
        borderRadius: 150,
    },
    styleRectangle1295: {
        position: "absolute",
        left: 140,
        bottom: 218,
        width: 85,
        height: 27,
        borderRadius: 150,
    },
    styleCardNumber: {
        position: "absolute",
        left: 29,
        top: 155,
        width: 52,
        color: "rgba(0, 0, 0, 1)",
        fontSize: 10,

        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "center",
        height: "auto",
        lineHeight: 11.5,
    },
    styleExpirationDate: {
        position: "absolute",
        left: 27,
        top: 207,
        width: 57,
        color: "rgba(0, 0, 0, 1)",
        fontSize: 10,
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "center",
        height: "auto",
        lineHeight: 11.5,
    },
    stylePayNow: {
        position: "absolute",
        left: 104,
        top: 265,
        width: 35,
        color: "rgba(255, 255, 255, 1)",
        fontSize: 10,
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "center",
        height: "auto",
        lineHeight: 11.5,
    },
    styleCvv: {
        position: "absolute",
        left: 173,
        top: 207,
        width: 15,
        color: "rgba(0, 0, 0, 1)",
        fontSize: 10,
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "center",
        height: "auto",
        lineHeight: 11.5,
    },
    styleGroup242: {
        position: "absolute",
        left: 18,
        top: 97,
        width: 377,
        height: 444,
    },
    styleFrame1987: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 8,
        paddingRight: 15,
        paddingBottom: 8,
        paddingLeft: 15,
    },
    styleMenu1: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 414,
        height: 89,
    },
    styleNavbar: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 414,
        height: 89,
    },
    styleGroup240: {
        position: "absolute",
        left: 0,
        top: 647,
        width: 414,
        height: 89,
    },
    styleVector: {
        position: "absolute",
        left: 107,
        right: 80,
        top: 668,
        bottom: 641,
        width: "auto",
        height: "auto",
    },
    styleVectorCopy1: {
        position: "absolute",
        left: 58,
        right: 29,
        top: 695,
        bottom: 667,
        width: "auto",
        height: "auto",
    },
    styleVectorCopy2: {
        position: "absolute",
        left: 279,
        right: 247,
        top: 666,
        bottom: 636,
        width: "auto",
        height: "auto",
    },
    styleVectorCopy3: {
        position: "absolute",
        left: 354,
        right: 330,
        top: 670,
        bottom: 643,
        width: "auto",
        height: "auto",
    },
    styleVectorCopy4: {
        position: "absolute",
        left: 190,
        right: 157,
        top: 669,
        bottom: 641,
        width: "auto",
        height: "auto",
    },
    styleRectangle1293Copy1: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 414,
        height: 56,
    },
    styleMenu: {
        position: "absolute",
        left: 13,
        top: 12,
        width: 30,
        height: 30,
    },
    styleBuy: {
        position: "absolute",
        left: 121,
        top: 14,
        width: 44,
        color: "rgba(255, 255, 255, 1)",
        fontSize: 24,
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "center",
        height: "auto",
        lineHeight: 27.6,
    },
    styleLine1: {
        position: "absolute",
        left: 52,
        right: 51,
        top: 7,
        bottom: -34,
        width: "auto",
        height: "auto",
    },
    styleArrow1: {
        position: "absolute",
        left: 36,
        right: 19,
        top: 27,
        bottom: 27,
        width: "auto",
        height: "auto",
    },
    styleStylename: {
        position: "relative",
        height: 736,
        backgroundColor: "rgba(241, 242, 243, 1)",
    },

});
