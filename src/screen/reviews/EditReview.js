import React, { useEffect, useState } from 'react'
import client from '../../apiRouter/client'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, Button, Dimensions, SafeAreaView, Pressable, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import bGStyles from '../../Styles/Background';
import Colors from '../../Styles/Colors';

function EditReview({ navigation, route }) {
    const {reviewID ,  productID  } = route.params;
    const [product, setProduct] = useState('');
    const [review, setReview] = useState();
    const [title, setTitle] = useState();
    console.log("🚀 ~ file: EditReview.js ~ line 14 ~ EditReview ~ title", title)
    const [description, setDescription] = useState();
    console.log("🚀 ~ file: EditReview.js ~ line 16 ~ EditReview ~ description", description)
    const [chosenOption, setChosenOption] = useState(null); //will store our current user options
    console.log("🚀 ~ file: EditReview.js ~ line 12 ~ EditReview ~ chosenOption", chosenOption)

    const options = [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
    ]; //create our options for radio group

    useEffect(() => {
        const getAProduct = async () => {
            try {
                const res = await client.get(`/api/product/getAProduct/${productID}`)
                setProduct(res.data.product);
                const res1 = await client.get(`/api/review/getAReview/${reviewID}`)
                setReview(res1.data.review)
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

    // useEffect(() => {
    //     const getAReview = async (reviewID) => {
    //         try {
    //             const res = await client.get(`/api/review/getAReview/${reviewID}`)
    //             setReview(res.data.review)
    //             // setRecommendation(res.data.review.recommendation)
    //             // setTitle(res.data.review.title);
    //             // setDescription(res.data.review.description);
    //         } catch (error) {
    //             console.log("🚀 ~ file: EditReview.js ~ line 22 ~ getAllReviewsProductWise ~ error", error)


    //         }
    //     }
    //     getAReview(reviewID)
    // }, [])

    const editReviewHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await client.put(`/api/review/editReview/${reviewID}`, { title: title, description: description, recommendation: chosenOption })
            alert(res.data.message)
            navigation.navigate('Reviews', {productID : product._id , productImage : product.productImage , productName : product.productName });
        } catch (error) {
            console.log("🚀 ~ file: EditReview.js ~ line 22 ~ getAllReviewsProductWise ~ error", error)


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
                    <View style={styles.productContainer} >
                        <View >
                            <Image style={styles.productImageContainer} resizeMode={'contain'} source={{ uri: `${product.productImage}` }} />
                        </View>
                        <View>
                            <Text style={styles.productCategoryContainer}> {product.productCategory}</Text>
                            <Text style={styles.productNameContainer}> {product.productName}</Text>
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
                            <TextInput style={styles.textInput} placeholder='Summarize review' defaultValue={review?.title} onChangeText={setTitle}></TextInput>
                        </View>
                        <View >
                            <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', marginTop: 10, left: 60 }}>What did you like or dislike ?</Text>
                        </View>
                        <View style={styles.formInput}>
                            <TextInput style={[styles.textInput, { height: 120 }]} multiline={true} placeholder='What should buyers know befor ?' defaultValue ={review?.description} onChangeText={setDescription}></TextInput>
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
                                    setChosenOption(value);
                                }} //if the user changes options, set the new value
                            />
                        </View>

                        <View style={styles.formInput}>
                            <TouchableOpacity style={styles.defaultButton} onPress={editReviewHandler}>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Update Review</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>

            </ScrollView>

        </SafeAreaView>
    </LinearGradient >

)
}

export default EditReview

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
        backgroundColor: '#fff'
    },
    radioBtnContainer: {
        flex: 1,
        width: 300,
        left: 40,
        paddingTop: 15,
        paddingLeft: 30,
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

})