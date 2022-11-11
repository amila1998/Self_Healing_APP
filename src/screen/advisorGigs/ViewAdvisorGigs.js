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

const ViewAdvisorGigs = () => {
    const { profile } = useLogin();
    const [searchTerm, setSearchTerm] = useState('');
    const [allgig, setAllGig] = useState('');
    console.log("🚀 ~ file: ViewAdvisorGigs.js ~ line 17 ~ ViewAdvisorGigs ~ allgig", allgig)
    const [userId, setUserId] = useState(profile._id);
    const [filterer, setFilterer] = useState();
    const Navigator = useNavigation();
    useEffect(() => { 
        const getDetails = async () => {
               try {
                   const res = await client.get(`/api/advisorGig/`)
                   setAllGig(res.data.AllAdvisorGig)
               } catch (error) {
                   console.log("🚀 ~ file: Book.js ~ line 13 ~ useEffect ~ error", error)
   
               }
           }
           getDetails()
       }, [])
       const navigateAddGig = () => {
        Navigator.navigate('AddAdvisorGig')

    }
    const deleteGig= (id) => {
        console.log("🚀 ~ file: ViewInvestorGigs.js ~ line 87 ~ editBus ~ id", id)
        const deleteDetails = async () => {
            try {
                const res = await client.delete(`/api/advisorGig/delete/${id}`)
                alert(res.data.msg);
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
                            <Text>Add Request</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={{ alignItems: 'center', backgroundColor: "", borderRadius: 10, height: 40 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        onChangeText={searchTerm => setSearchTerm(searchTerm)}

                    />
                </View>

                {allgig && allgig.map((allgig, index) => (
                    <View style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: 10, margin: 10 }}>
                        <View style={[styles.container, {
                            // Try setting `flexDirection` to `"row"`.
                            flexDirection: "row",

                        }]}>
                            <View style={{ flex: 0.3, backgroundColor: "" }}>
                                <Image source={require('../../../assets/profile.png')} resizeMode='contain' style={{ width: 30, height: 30, }} />

                            </View>
                            <View style={{ flex: 2, backgroundColor: "" }}>
                                <Text>{allgig.name}</Text>
                                {/* <Text>{allgig.tag}</Text> */}
                                <Text>{allgig.description}</Text>
                            </View>

                        </View>
                       { allgig.userID==userId &&
                       <View style={[styles.container, {
                            // Try setting `flexDirection` to `"row"`.
                            flexDirection: "row",

                        }]}>
                            <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                                <TouchableOpacity>
                                    <Text style={{ color: 'darkorange' }}>Comment</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                                <TouchableOpacity 
                                onPress={()=>{Navigator.navigate('EditAdvisorGig',{AGID:allgig._id, AGD:allgig.description})}}>
                                    <Text style={{ color: '#fcbb08' }}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => deleteGig(allgig._id)}>
                                    <Text style={{ color: 'red' }}>Delete</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        }
                       {  !(allgig.userID==userId) &&
                       <View style={[styles.container, {
                            // Try setting `flexDirection` to `"row"`.
                            flexDirection: "row",

                        }]}>
                            <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                                <TouchableOpacity>
                                    <Text style={{ color: 'darkorange' }}>Comment</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                                {/* <TouchableOpacity>
                                    <Text style={{ color: '#fcbb08' }}>Edit</Text>
                                </TouchableOpacity> */}
                            </View>
                            <View style={{ flex: 2, backgroundColor: "", alignItems: 'center' }}>
                                <TouchableOpacity>
                                    {/* <Text style={{ color: 'blue' }}>Contact</Text> */}
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

export default ViewAdvisorGigs