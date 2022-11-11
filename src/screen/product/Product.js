import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import bGStyles from '../../Styles/Background';
import Colors from '../../Styles/Colors';

function Product() {

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
            style={bGStyles.background}
        >

                    <View>

                        <Text style={styles.styleProductInfo}>
                            {`Product Info`}
                        </Text>
                        <Text style={styles.styleRs550000}>
                            {`Rs: 5500.00`}
                        </Text>
                        <Text style={styles.stylePrice}>
                            {`Price`}
                        </Text>
                        <Image style={[styles.styleImage, { transform: [{ rotate: "0deg" }] }]} source={{ uri: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/F1auGMbQ2JsmmqBxvh24i3Ep.jpeg" }} />
                        <Text style={styles.styleQuentity}>
                            {`Quentity`}
                        </Text>
                        <View style={styles.styleAddToCart}>
                            <Button title='Add to Cart' color="#ff6d27" />
                        </View>
                        <View style={styles.styleBuyNow}>
                            <Button title='Buy Now' color="#ff6d27" />
                        </View>
                        <Text style={styles.styleProductDescription}>
                            {`Chocolate cake, traditional German chocolate filling (lightly creamy caramel pecan coconut) and chocolate frosting. Accented with chocolate ganache & toasted coconut`}
                        </Text>
                        <View style={styles.reviewsOnChocolateCake}>
                            <Text style={styles.style2ReviewsOnChocolateCake}>
                                {`2 Reviews on Chocolate Cake`}
                            </Text>
                        </View>

                        <View style={styles.styleReviews}>
                            <Button title='Reviews' />
                        </View>

                    </View>
        </LinearGradient>

    )

}

export default Product

const styles = StyleSheet.create({
    styleProductInfo: {
        position: "absolute",
        left: 58,
        top: 386,
        marginTop: 10,
        width: 101,
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "center",
        height: "auto",
        lineHeight: 18.4,
    },
    styleRs550000: {
        position: "absolute",
        left: 109,
        top: 288,
        width: 80,
        color: "rgba(54, 68, 89, 1)",
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "left",
        height: "auto",
        lineHeight: 13.8,
    },
    stylePrice: {
        position: "absolute",
        left: 124,
        top: 265,
        width: 37,
        color: "rgba(54, 68, 89, 1)",
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "left",
        height: "auto",
        lineHeight: 16.1,
    },
    styleImage: {
        position: "absolute",
        left: 133,
        top: 82,
        borderRadius: 11,
        width: 147,
        height: 145,
    },
    styleQuentity: {
        position: "absolute",
        left: 247,
        top: 265,
        width: 59,
        color: "rgba(54, 68, 89, 1)",
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "left",
        height: "auto",
        lineHeight: 16.1,
    },
    styleAddToCart: {
        position: "absolute",
        left: 71,
        top: 343,
        width: 121,
        color: "rgba(255, 255, 255, 1)",
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "center",
        height: "auto",
        lineHeight: 13.8,
    },
    styleBuyNow: {
        position: "absolute",
        left: 223,
        top: 343,
        width: 121,
        color: "rgba(255, 255, 255, 1)",
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "center",
        height: "auto",
        lineHeight: 13.8,
    },
    styleProductDescription: {
        position: "absolute",
        left: 60,
        top: 414,
        width: 311,
        marginTop: 10,
        color: "rgba(57, 62, 70, 1)",
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "left",
        height: "auto",
        lineHeight: 13.8,
    },
    style2ReviewsOnChocolateCake: {
        position: "absolute",
        left: 75,
        top: 521,
        width: 270,
        height: 40,
        padding: 13,
        backgroundColor: "#D9D9D9",
        borderRadius: 15,
        color: "rgba(0, 0, 0, 1)",
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "center",
        lineHeight: 16.1,
    },

    styleReviews: {
        position: "absolute",
        left: 115,
        top: 590,
        width: 200,
        color: "rgba(255, 255, 255, 1)",
        letterSpacing: 0,
        fontStyle: "normal",
        height: "auto",
        lineHeight: 15.8,
    },
})
