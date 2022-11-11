import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native-paper';
import bGStyles from '../../Styles/Background';
import Colors from '../../Styles/Colors'
import client from '../../apiRouter/client'
import { useLogin } from '../../context/LoginProvider';

const ViewInvestorGigs = () => {
    const { profile } = useLogin();
    const [searchTerm, setSearchTerm] = useState('');
    const [allPost, setAllPost] = useState('');
    const [userId, setUserId] = useState(profile._id);
    const [filterer, setFilterer] = useState();
    const Navigator = useNavigation();

    console.log("🚀 ~ file: ViewInvestorGigs.js ~ line 13 ~ ViewInvestorGigs ~ allPost", allPost)





    useEffect(() => {
     const getDetails = async () => {
            try {
                const res = await client.get(`/api/gig/`)
                setAllPost(res.data.AllGig)
            } catch (error) {
                console.log("🚀 ~ file: Book.js ~ line 13 ~ useEffect ~ error", error)

            }
        }
        getDetails()
    }, [])

    const post = [
        {
            _id: "1234567",
            name: "udayantha",
            tag: "tag1",
            description: "Deep in the Ocean",
        },
        {
            _id: "123456",
            name: "amila",
            tag: "tag2",
            description: "Deep in the Ocean",
        },
        {
            _id: "12345",
            name: "vishwa",
            tag: "tag3",
            description: "Deep in the Ocean",
        },
        {
            _id: "12345",
            name: "sithara",
            tag: "tag3",
            description: "Deep in the Ocean",
        },

    ]; 

   
    if (allPost) {
        const filteredPost = allPost.filter(post => {
            return (post.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                post.description.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
    
        })
        // setFilterer(filteredPost);
    } else {
        
    }

    const navigateAddGig = () => {
        Navigator.navigate('Addgig')
    }
    // const navigateEditGig = () => {
    //     Navigator.navigate('EditGig')
    // }
    const deleteGig= (id) => {
        console.log("🚀 ~ file: ViewInvestorGigs.js ~ line 87 ~ editBus ~ id", id)
        const deleteDetails = async () => {
            try {
                const res = await client.delete(`/api/gig/deleteGig/${id}`)
                alert(res.data.message);
            } catch (error) {
                console.log("🚀 ~ file: Book.js ~ line 13 ~ useEffect ~ error", error)

            }
        }
        deleteDetails()
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
                            <TouchableOpacity onPress={navigateAddGig}>
                                <Text>Add post</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                    <View style={{ alignItems: 'center', backgroundColor: "", borderRadius: 10, height: 40 }}>
                        <TextInput
                            style={styles.input}
                            placeholder="search"
                            onChangeText={searchTerm => setSearchTerm(searchTerm)}

                        />
                    </View>

                    {allPost && allPost.map((post, index) => (
                        <View style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: 10, margin: 10 }}>
                            <View style={[styles.container, {
                                // Try setting `flexDirection` to `"row"`.
                                flexDirection: "row",

                            }]}>
                                <View style={{ flex: 0.3, backgroundColor: "" }}>
                                    <Image source={require('../../../assets/profile.png')} resizeMode='contain' style={{ width: 30, height: 30, }} />

                                </View>
                                <View style={{ flex: 2, backgroundColor: "" }}>
                                    <Text>{post.name}</Text>
                                    {/* <Text>{post.tag}</Text> */}
                                    <Text>{post.description}</Text>
                                </View>

                            </View>
                           { post.userID==userId &&
                           <View style={[styles.container, {
                                // Try setting `flexDirection` to `"row"`.
                                flexDirection: "row",

                            }]}>
                                <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'darkorange' }}>View</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                                    <TouchableOpacity 
                                    onPress={()=>{Navigator.navigate('EditGig',{GID:post._id})}}>
                                        <Text style={{ color: '#fcbb08' }}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => deleteGig(post._id)}>
                                        <Text style={{ color: 'red' }}>Delete</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            }
                           {  !(post.userID==userId) &&
                           <View style={[styles.container, {
                                // Try setting `flexDirection` to `"row"`.
                                flexDirection: "row",

                            }]}>
                                <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'darkorange' }}>View</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                                    {/* <TouchableOpacity>
                                        <Text style={{ color: '#fcbb08' }}>Edit</Text>
                                    </TouchableOpacity> */}
                                </View>
                                <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'blue' }}>Contact</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            }

                        </View>
                    ))
                    }
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

})

export default ViewInvestorGigs