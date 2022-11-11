import React, { useEffect, useState } from 'react'
import axios from "axios";
import client from '../../apiRouter/client'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, Button, Dimensions, SafeAreaView, Pressable, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import RadioForm from 'react-native-simple-radio-button'
import bGStyles from '../../Styles/Background';
import Colors from '../../Styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { useLogin } from '../../context/LoginProvider';

function AddReview({navigation , route}) {
    const { productID , productImage , productName } = route.params;
    const [productCategory , setProductCategory] = useState('');
    const { profile } = useLogin();
    const [recommendation, setRecommendation] = useState(null); //will store our current user options
    const [userID , setUserID] = useState(profile._id);
    const [first_name , setFirst_name] = useState(profile.first_name);
    const [last_name , setLast_name] = useState(profile.last_name);
    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');
    const options = [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
    ]; //create our options for radio group

    useEffect(() => {
        const getAProduct = async () => {
            try {
                const res = await client.get(`/api/product/getAProduct/${productID}`)
                setProductCategory(res.data.product.productCategory);
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

    const addReviewHandler = async (e) => {
        e.preventDefault();
        if (title === "" ||  description === "" ||  recommendation==="") {
            alert("Fill all the fields");
        } else {
            try {
                const res = await client.post("/api/review/addReview",{productID , userID , first_name , last_name , title , description , recommendation });
                console.log(res.data);
                alert(res.data.message);
                navigation.navigate('Reviews' , {productID : productID , productImage :productImage , productName : productName });

            } catch (err) {
                console.log("🚀 ~ file: AddReview.js ~ line 39 ~ addReviewHandler ~ err", err.message)
                console.log(err);
            }
        }
    };


    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
            style={bGStyles.background}
        >
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <View style={styles.productContainer} >
                            <View >
                                <Image style={styles.productImageContainer} resizeMode={'contain'} source={{ uri: `${productImage}` }} />
                            </View>
                            <View>
                                <Text style={styles.productCategoryContainer}> {productCategory}</Text>
                                <Text style={styles.productNameContainer}> {productName}</Text>
                            </View>
                        </View>

                        <View>
                            <Text numberOfLines={1} style={{ width: 353, marginTop: 10, left: 30, color: '#ACACAC' }} >
                                _____________________________________________________________
                            </Text>
                        </View>

                        <View>

                            <View >
                                <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', marginTop: 20, left: 60 }}>Set a Title for your review</Text>
                            </View>
                            <View style={styles.formInput}>
                                <TextInput style={styles.textInput} name="title" placeholder='Summarize review' onChangeText={setTitle}></TextInput>
                            </View>
                            <View >
                                <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', marginTop: 10, left: 60 }}>What did you like or dislike ?</Text>
                            </View>
                            <View style={styles.formInput}>
                                <TextInput style={[styles.textInput, { height: 120 }]} name="description" multiline={true} placeholder='What should buyers know befor ?' onChangeText={setDescription}></TextInput>
                            </View>
                            <View >
                                <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', marginTop: 10, left: 60 }}>Would you recommend this product</Text>
                            </View>
                            <View style={styles.radioBtnContainer}>
                                <RadioForm
                                    name="recommendation"
                                    radio_props={options}
                                    initial={0} //initial value of this group
                                    onPress={(value) => {
                                        setRecommendation(value);
                                    }} //if the user changes options, set the new value
                                />
                            </View>

                            <View style={styles.formInput}>
                                <TouchableOpacity  style={styles.defaultButton} onPress={addReviewHandler}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Submit Review</Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                    </View>

                </ScrollView>

            </SafeAreaView>
        </LinearGradient >

    )
}

export default AddReview

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        width: 341,
        height: 119,
        left: 30,
        marginTop: 100,
        borderRadius: 15,
        backgroundColor: '#D9D9D9'
    },
    productImageContainer: {
        width: 89,
        height: 88,
        borderRadius: 15,
        position: "absolute",
        left: 30,
        top: 16,
    },
    productCategoryContainer: {
        position: "absolute",
        left: 140,
        top: 30,
    },
    productNameContainer: {
        position: "absolute",
        left: 140,
        top: 60,
        fontSize: 16,
        fontWeight: "500"
    },
    formInput: {
        marginBottom: 10,
        width: 300,
        paddingTop: 10,
        left: 60,

    },
    textInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#10006b',
        color: '#10006b',
        borderRadius: 15,
        backgroundColor: '#F1EFEC'
    },
    radioBtnContainer: {
        flex: 1,
        width: 300,
        left: 60,
        paddingTop: 15,
        paddingLeft: 30,
    },
    defaultButton: {
        padding: 15,
        backgroundColor: '#FF6D27',
        borderRadius: 50,
        width : 170 ,
        left : 60 ,
        marginTop : 10,
        marginBottom : 20
    },

})