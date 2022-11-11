import React, { useEffect, useState } from 'react'
import client from '../../apiRouter/client'
import { useLogin } from '../../context/LoginProvider'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Colors from '../../Styles/Colors'
import bGStyles from '../../Styles/Background'

const BusinessDetails = ({ route }) => {
  const { BID } = route.params
  const [businessDetails, setBusinessDetails] = useState('')
  console.log("🚀 ~ file: BusinessDetails.js ~ line 8 ~ BusinessDetails ~ businessDetails", businessDetails)
  const { callback, setCallBack } = useLogin()

  const [sDescription, setSDescription] = useState(true)
  const [sReviews, setSReviews] = useState(false)
  const [sProducts, setSProducts] = useState(false)
  const [sDonents, setSDonents] = useState(false)
  const [sInsvestors, setSInsvestors] = useState(false)
  const [sAdvises, setSAdvises] = useState(false)

  useEffect(() => {
    const getBusinessDetails = async () => {
      try {
        const res = await client.get(`/api/business/viewByID/${BID}`)
        setBusinessDetails(res.data)
        setCallBack(false)
      } catch (error) {
        console.log("🚀 ~ file: BusinessDetails.js ~ line 14 ~ getBusinessDetails ~ error", error)

      }
    }
    if (callback) {
      getBusinessDetails()
    }

  }, [callback, BID])



  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
      style={bGStyles.background}
    >
      <SafeAreaView style={{ marginTop: 20, flex: 1, }}>
        <ScrollView>
          <View style={{ margin: 10, padding: 10, backgroundColor: '#D9D9D9' }}>
            <View>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 5, fontSize: 24, color: '#36455A' }}>{businessDetails.business_name}</Text>
            </View>
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={{ flexDirection: 'row' }}>

                <TouchableOpacity style={sDescription ? styles.selectedBtn : styles.unSelectedBtn}
                  onPress={() => {
                    setSDescription(true)
                    setSReviews(false)
                    setSProducts(false)
                    setSDonents(false)
                    setSInsvestors(false)
                    setSAdvises(false)
                  }}
                >
                  {
                    sDescription && <View style={{ width: '100%', backgroundColor: '#FF6D27', height: 5 }}></View>
                  }
                  <Text style={{fontSize:20}}>Description</Text>
                </TouchableOpacity>
                <TouchableOpacity style={sReviews ? styles.selectedBtn : styles.unSelectedBtn}
                  onPress={() => {
                    setSDescription(false)
                    setSReviews(true)
                    setSProducts(false)
                    setSDonents(false)
                    setSInsvestors(false)
                    setSAdvises(false)
                  }}>
                  {
                    sReviews && <View style={{ width: '100%', backgroundColor: '#FF6D27', height: 5, }}></View>
                  }
                  <Text>Reviews</Text>
                </TouchableOpacity>
                <TouchableOpacity style={sProducts ? styles.selectedBtn : styles.unSelectedBtn}
                  onPress={() => {
                    setSDescription(false)
                    setSReviews(false)
                    setSProducts(true)
                    setSDonents(false)
                    setSInsvestors(false)
                    setSAdvises(false)
                  }}>
                  {
                    sProducts && <View style={{ width: '100%', backgroundColor: '#FF6D27', height: 5 }}></View>
                  }
                  <Text>Products</Text>
                </TouchableOpacity>
                <TouchableOpacity style={sDonents ? styles.selectedBtn : styles.unSelectedBtn}
                  onPress={() => {
                    setSDescription(false)
                    setSReviews(false)
                    setSProducts(false)
                    setSDonents(true)
                    setSInsvestors(false)
                    setSAdvises(false)
                  }}>
                  {
                    sDonents && <View style={{ width: '100%', backgroundColor: '#FF6D27', height: 5 }}></View>
                  }
                  <Text>Donents</Text>
                </TouchableOpacity>
                <TouchableOpacity style={sInsvestors ? styles.selectedBtn : styles.unSelectedBtn}
                  onPress={() => {
                    setSDescription(false)
                    setSReviews(false)
                    setSProducts(false)
                    setSDonents(false)
                    setSInsvestors(true)
                    setSAdvises(false)
                  }}>
                  {
                    sInsvestors && <View style={{ width: '100%', backgroundColor: '#FF6D27', height: 5 }}></View>
                  }
                  <Text>Insvestors</Text>
                </TouchableOpacity>
                <TouchableOpacity style={sAdvises ? styles.selectedBtn : styles.unSelectedBtn}
                  onPress={() => {
                    setSDescription(false)
                    setSReviews(false)
                    setSProducts(false)
                    setSDonents(false)
                    setSInsvestors(false)
                    setSAdvises(true)
                  }}>
                  {
                    sAdvises && <View style={{ width: '100%', backgroundColor: '#FF6D27', height: 5 }}></View>
                  }
                  <Text>Advises</Text>
                </TouchableOpacity>

              </ScrollView>
            </View>
            {
              sDescription && <>
                <View style={{  backgroundColor: '#fff', padding: 10, marginTop: 5 }}>
                    <View style={{flexDirection:'row',}}>
                      <Text style={{color:'#2A2B5F', fontWeight:'bold', fontSize:18}}>
                        Status : 
                      </Text>
                    </View>
                </View>
              </>
            }
            {
              sReviews && <>
                <View style={{ backgroundColor: '#fff', padding: 10, marginTop: 5 }}>

                </View>
              </>
            }
            {
              sProducts && <>
                <View style={{ backgroundColor: '#fff', padding: 10, marginTop: 5 }}>

                </View></>
            }
            {
              sDonents && <>
                <View style={{ backgroundColor: '#fff', padding: 10, marginTop: 5 }}>

                </View></>
            }
            {
              sInsvestors && <>
                <View style={{ backgroundColor: '#fff', padding: 10, marginTop: 5 }}>

                </View></>
            }
            {
              sAdvises && <>
                <View style={{ backgroundColor: '#fff', padding: 10, marginTop: 5 }}>

                </View></>
            }
          </View>
        </ScrollView>


      </SafeAreaView>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  selectedBtn: {
    backgroundColor: '#fff',
    padding: 10,

  },
  unSelectedBtn: {
    backgroundColor: '#fff',
    padding: 10,
  },
  cardTitle: {
    color: '#36455A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ridesFriends: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  left: {
    width: '80%',
    overflow: 'hidden',
  },
  right: {
    width: '18%',
    marginLeft: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
  mainContainer: {
    marginTop: 18,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    marginBottom: 5,
  },
  defultBg: {
    width: '100%',
    height: 150
  },
  loginBody: {
    padding: 10
  },
  formInput: {
    marginBottom: 10,
    padding: 10,
  },
  textInput: {
    width: 100,
    padding: 2,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#10006b',
    color: '#10006b',
    borderRadius: 50,
    backgroundColor: '#fff'
  },
  defaultButton: {
    padding: 15,
    backgroundColor: '#FF6D27',
    borderRadius: 50,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
    marginVertical: 10,
    margin: 10,
    height: 140,
    maxHeight: 140
  },
  elevation: {
    elevation: 10,
    shadowColor: '#000',
  },

})

export default BusinessDetails