import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import client from '../../apiRouter/client'
import { StyleSheet, Text, View, Image, Button, Dimensions, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import bGStyles from '../../Styles/Background';
import Colors from '../../Styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { useLogin } from '../../context/LoginProvider';

function Reviews({navigation}) {
    const { profile } = useLogin();
    const [reviews, setReviews] = useState([]);
    const [userID, setUserID] = useState(profile._id);
    // const navigation = useNavigation();

    useEffect(() => {
        const getAllReviewsProductWise = async () => {
            try {
                const res = await client.get('/api/review/getAllReviewsProductWise/74657465465456765ytuyt65755')
                setReviews(res.data.reviews)
            } catch (error) {
                console.log("🚀 ~ file: ViewSearchedRoutes.js ~ line 19 ~ getAllBusShedules ~ error", error)

            }
        }
        getAllReviewsProductWise()
    }, [])

    const deleteReview = async (id) => {
        try {
            const res = await client.delete(`/api/review/deleteReview/${id}`)
            alert(res.data.message)
            const res1 = await client.get('/api/review/getAllReviewsProductWise/74657465465456765ytuyt65755')
            setReviews(res1.data.reviews)
            navigation.navigate('Reviews')


        } catch (error) {

            console.log(error)
        }
    }

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
            style={bGStyles.background}
        >
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <View style={styles.reviewCountContainer} >
                            <Text style={styles.reviewCount}> {reviews.length} Reviews On This Product</Text>
                        </View>
                        <View>
                            <Text numberOfLines={1} style={{ width: 353, marginTop: 10, left: 30, color: '#ACACAC' }} >
                                _____________________________________________________________
                            </Text>
                        </View>

                        <View >
                            <TouchableOpacity onPress={() => { navigation.navigate('AddReview')}}>
                                <View style={styles.addReviewBtn} >
                                    <View >
                                        <Image style={styles.addIcon} resizeMode={'contain'} source={require('../../../assets/addReview.png')} />
                                    </View>
                                    <View>
                                        <Text style={[styles.addReviewText, { fontSize: 16, color: '#fff', fontWeight: 'bold' }]} > Add Review</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text numberOfLines={1} style={{ width: 353, marginTop: 0, left: 30, color: '#ACACAC' }} >
                                _____________________________________________________________
                            </Text>
                        </View>
                        <View >
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold', marginTop: 16, left: 30, }}>
                                User Reviews
                            </Text>
                        </View>

                        <View>
                            {reviews && reviews.map((reviews ,index ) => {
                                return (
                                    <View key={index} style={styles.reviewsContainer}>
                                        <Text style={styles.reviewUserName}>{reviews.first_name}{" "}{reviews.last_name}{reviews.userID === userID ? (<Text>{"(You)"}</Text>) : (<Text></Text>)}</Text>
                                        <Text style={[styles.reviewDescription, { color: '#6A6A6A' }]}>{'"'}{reviews.description}{'"'}</Text>
                                        <View >{reviews.userID === userID ?
                                            (

                                                <View >
                                                    <View style={styles.reviewControllerContainer} >
                                                        <View >
                                                            <Text style={[styles.reviewEdit, { fontSize: 16, color: '#FF3347', fontWeight: 'bold' }]} onPress={() => {
                                                                navigation.navigate('EditReview', {
                                                                    reviewID : reviews._id ,  productID: reviews.productID, title: reviews.title , description: reviews.description, recommendation: reviews.recommendation
                                                                })
                                                            }}>Edit</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={[styles.reviewDelete, { fontSize: 16, color: '#FF3347', fontWeight: 'bold' }]} onPress={() => deleteReview(reviews._id)}> Delete</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            ) : (
                                                <Text></Text>
                                            )}
                                        </View>

                                    </View>
                                );
                            })}
                        </View>
                        <View style={{ marginBottom: 30 }} />
                    </View>

                </ScrollView>

            </SafeAreaView>

        </LinearGradient>

    )
}

export default Reviews

const styles = StyleSheet.create({
    addReviewBtn: {
        flex: 1,
        width: 341,
        height: 40,
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
    reviewCountContainer: {
        flex: 1,
        width: 241,
        height: 44,
        left: 86,
        marginTop: 88,
        borderRadius: 15,
        backgroundColor: '#D9D9D9'
    },
    reviewCount: {
        position: "absolute",
        left: 20,
        marginTop: 10,
        fontSize: 16,
        fontWeight: "500"
    },
    defaultButton: {
        padding: 15,
        backgroundColor: '#FF6D27',
        borderRadius: 50,
        width: 170,
        left: 60,
        marginTop: 10,
        marginBottom: 20
    },
    reviewsContainer: {
        flex: 1,
        width: 341,
        height: 125,
        left: 30,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#EDEDEF'
    },
    reviewUserName: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    reviewDescription: {
        marginTop: 10,
        width: 280,
        height: 40
    },
    reviewControllerContainer: {
        flex: 1,
        width: 60,
        height: 40,
        left: 150,
        marginTop: 10,
        marginBottom: 20,
        paddingBottom: 10
    },
    reviewEdit: {
        width: 32,
        height: 34,
        position: "absolute",
        left: 30,
        top: 4,
    },
    reviewDelete: {
        position: "absolute",
        left: 80,
        top: 4,
    },
})