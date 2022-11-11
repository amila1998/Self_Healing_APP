import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native-paper';
import bGStyles from '../../Styles/Background';
import Colors from '../../Styles/Colors'
import { useNavigation } from '@react-navigation/native'
import client from '../../apiRouter/client'
import { useLogin } from '../../context/LoginProvider';

const EditGig = ({route}) => {
    const { GID } = route.params
    console.log("🚀 ~ file: EditGig.js ~ line 15 ~ EditGig ~ GID", GID)
    const { profile } = useLogin();
    const [userID, setUserID] = useState('636dec9eadb502154e8c348f');
    const [description, setDescription] = useState('');
    console.log("🚀 ~ file: Addgig.js ~ line 15 ~ Addgig ~ description", description)
    const Navigator = useNavigation();
    useEffect(() => {
        const getDetails = async () => {
            try {
                const res = await client.get(`/api/gig/${GID}`)
                setDescription(res.data.OneGig)
            } catch (error) {
                console.log("🚀 ~ file: Book.js ~ line 13 ~ useEffect ~ error", error)

            }
        }
        getDetails()
    }, [userID])
    const editPost = async (e) => {
        e.preventDefault();
        if (description === "") {
            alert("You are not add post");
        } else {
            try {
                const res = await client.put(`/api/gig/editGig/${GID}`,{description:description});
                console.log(res)
                alert(res.data.message);
            } catch (err) {
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
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View>
                    <Text></Text>
                </View>

                <View style={[styles.container, {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: "row",

                }]}>
                    <View style={{ flex: 0.3, backgroundColor: "" }}>
                        <Image source={require('../../../assets/profile.png')} resizeMode='contain' style={{ width: 30, height: 30, }} />

                    </View>
                    <View style={{ flex: 2, backgroundColor: "rgba(255, 255, 255, 0.5)", alignItems: 'center', borderRadius: 10 }}>
                        <Text>{profile.first_name}</Text>
                    </View>


                </View>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: 10, margin: 10 }}>
                    <View style={[styles.container, {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: "row",

                    }]}>
                        <View style={{ flex: 0.3, backgroundColor: "" }}>
                            <Image source={require('../../../assets/profile.png')} resizeMode='contain' style={{ width: 30, height: 30, }} />

                        </View>
                        <View style={{ flex: 2, backgroundColor: "" }}>
                            <TextInput  name="description"  style={styles.textInput} onChangeText={setDescription} placeholder='type your idea' value={description?.description}></TextInput>
                        </View>

                    </View>

                    <View style={[styles.container, {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: "row",

                    }]}>
                        <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                            {/* <TouchableOpacity>
                                <Text style={{ color: 'darkorange' }}>View</Text>
                            </TouchableOpacity> */}
                        </View>

                        <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                            <TouchableOpacity onPress={editPost}>
                                <Text style={{ color: '#fcbb08' }}>Edit Post</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: "", alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>Navigator.navigate('ViewInvestorGigs')}>
                                <Text style={{ color: 'red' }}>Cancel</Text>
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


    },
    dummyText: {
    },
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        width: 200,
        // margin: 12,
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
    }, 
    textInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        height:150,
        borderColor: '#10006b',
        color: '#10006b',
        borderRadius: 20,
        backgroundColor: '#fff'
    
      },

})
export default EditGig