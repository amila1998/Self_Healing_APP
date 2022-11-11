import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import bGStyles from '../../Styles/Background';
import Colors from '../../Styles/Colors';
import client from '../../apiRouter/client'
import { useLogin } from '../../context/LoginProvider';

function Product({ navigation, route }) {
    const { productID } = route.params;
    console.log("🚀 ~ file: Product.js ~ line 10 ~ Product ~ productID", productID)
    const [product, setProduct] = useState('');
    console.log("🚀 ~ file: Product.js ~ line 11 ~ Product ~ product", product)
    const [reviews, setReviews] = useState([]);
    console.log("🚀 ~ file: Product.js ~ line 15 ~ Product ~ reviews", reviews)
    //const { callback, setCallBack } = useState(true)

    useEffect(() => {
        const getAProduct = async () => {
            try {
                const res = await client.get(`/api/product/getAProduct/${productID}`)
                setProduct(res.data.product);
                const res1 = await client.get(`/api/review/getAllReviewsProductWise/${productID}`)
                setReviews(res1.data.reviews)
                //setCallBack(false)
            } catch (error) {
                console.log("🚀 ~ file: Product.js ~ line 22 ~ getAProduct ~ error", error)
            }
        }
        getAProduct()
        // if (callback) {
        //     getAProduct()
        // }

    }, [productID])

    //   useEffect(() => {
    //     const getAllReviewsProductWise = async () => {
    //         try {

    //         } catch (error) {
    //             console.log("🚀 ~ file: ViewSearchedRoutes.js ~ line 19 ~ getAllBusShedules ~ error", error)

    //         }
    //     }
    //     getAllReviewsProductWise()
    // }, [productID])



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
                    Rs. {product.productPrice}
                </Text>
                <TextInput style={[styles.styleQuentity , {borderColor : '#000' , height : 50  }]} keyboardType="numeric" maxLength={1} defaultValue="1"/>
                <Text style={styles.stylePrice}>
                    {`Price`}
                </Text>
                <Image style={[styles.styleImage, { transform: [{ rotate: "0deg" }] }]} source={{ uri: `${product.productImage}` }} />
                <Text style={styles.styleQuentityLabel}>
                    {`Quentity`}
                </Text>
                
                <View style={styles.styleAddToCart}>
                    <Button title='Add to Cart' color="#ff6d27" />
                </View>
                <View style={styles.styleBuyNow}>
                    <Button title='Buy Now' color="#ff6d27" onPress={() => { navigation.navigate('Buy' , {productID : product._id , productName : product.productName , productprice : product.productPrice })}}/>
                </View>
                <Text style={styles.styleProductDescription}>
                    {product.productInfo}
                </Text>
                <View style={styles.reviewsOnChocolateCake}>
                    <Text style={styles.style2ReviewsOnChocolateCake}>
                        {`${reviews.length} Reviews on ${product.productName}`}
                    </Text>
                </View>
                <View style={styles.styleReviews}>
                    <View>
                        <Text numberOfLines={1} style={{ width: 320, marginTop: 0, left: 10, color: '#AAAA' }} >
                            _____________________________________________________________
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Reviews' , {productID : product._id , productImage : product.productImage , productName : product.productName }) }}>
                        <View style={styles.addReviewBtn} >
                            <View >
                                <Image style={styles.addIcon} resizeMode={'contain'} source={require('../../../assets/productReview.png')} />
                            </View>
                            <View>
                                <Text style={[styles.addReviewText, { fontSize: 16, color: '#fff', fontWeight: 'bold' }]} > Reviews</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text numberOfLines={1} style={{ width: 320, marginTop: 25, left: 10, color: '#AAAA' }} >
                            _____________________________________________________________
                        </Text>
                    </View>
                </View>

            </View>
        </LinearGradient>

    )

}

export default Product

const styles = StyleSheet.create({
    addReviewBtn: {
        flex: 1,
        width: 341,
        height: 10,
        left: 30,
        marginTop: 10,
    },
    addIcon: {
        width: 32,
        height: 34,
        position: "absolute",
        left: 30,
        top: 4,
    },
    addReviewText: {
        position: "absolute",
        left: 80,
        top: 10,
    },
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
    styleQuentityLabel: {
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
    styleQuentity: {
        position: "absolute",
        left: 200,
        top: 288,
        width: 80,
        color: "rgba(54, 68, 89, 1)",
        letterSpacing: 0,
        fontStyle: "normal",
        textAlign: "left",
        height: "auto",
        lineHeight: 13.8,
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
        left: 30,
        top: 590,
        width: 200,
        color: "rgba(255, 255, 255, 1)",
        letterSpacing: 0,
        fontStyle: "normal",
        height: "auto",
        lineHeight: 15.8,
    },
})
