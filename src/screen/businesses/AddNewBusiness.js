import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import bGStyles from '../../Styles/Background'
import Colors from '../../Styles/Colors'
import SelectList from 'react-native-dropdown-select-list'
import BusinessStatusData from '../../Data/BusinessStatus'
import BusinessCategoriesData from '../../Data/BusinessCategories'
import BusinessExpectationsData from '../../Data/BusinessExpectations'
const AddNewBusiness = () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[Colors.light.white, Colors.light.lightBlue, Colors.light.lightBlue, Colors.light.darkBlue]}
      style={bGStyles.background}
    >
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <View>
            <View style={styles.container}>
              <Image resizeMode={'contain'} style={styles.defultBg} source={require('../../../assets/cg.png')} />
            </View>
            <View style={styles.container}>
              <Image resizeMode={'contain'} source={require('../../../assets/SELFHEALING.png')} />
            </View>
            <View style={styles.container}>
              <Image resizeMode={'contain'} source={require('../../../assets/STAYWITHNOPOVERTY.png')} />
            </View>
            <View style={styles.loginBody}>
              <View style={styles.formInput}>
                <TextInput style={styles.textInput} placeholder='Business Name'></TextInput>
              </View>
              <View style={styles.formInput}>
                <TextInput style={styles.textInput} placeholder='Business Name'></TextInput>
              </View>
              <View style={styles.formInput}>
                <SelectList search={false} dropdownStyles={{ backgroundColor: '#fff' }} boxStyles={styles.textInput} data={BusinessStatusData} placeholder='Business Status' />
              </View>
              <View style={styles.formInput}>
                <SelectList search={true} dropdownStyles={{ backgroundColor: '#fff' }} boxStyles={styles.textInput} data={BusinessCategoriesData} placeholder='Business Category' />
              </View>
              <View style={styles.formInput}>
                <SelectList search={true} isMulty={true} dropdownStyles={{ backgroundColor: '#fff' }} boxStyles={styles.textInput} data={BusinessExpectationsData} placeholder='Business Expectations' />
              </View>
              <View style={styles.formInput}>
                <TextInput style={styles.textInput} placeholder='Business Description' numberOfLines={4} multiline={true}></TextInput>
              </View>
              <View style={styles.formInput}>
                <TouchableOpacity style={styles.defaultButton}>
                  <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }} >Register</Text>
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
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#10006b',
    color: '#000',
    borderRadius: 50,
    backgroundColor: '#fff',
    placeholderTextColor: "#000"
  },
  defaultButton: {
    padding: 15,
    backgroundColor: '#FF6D27',
    borderRadius: 50,
  },


})

export default AddNewBusiness