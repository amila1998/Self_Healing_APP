import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import bGStyles from '../../Styles/Background'
import Colors from '../../Styles/Colors'
import SelectList from 'react-native-dropdown-select-list'
import BusinessStatusData from '../../Data/BusinessStatus'
import BusinessCategoriesData from '../../Data/BusinessCategories'
import BusinessExpectationsData from '../../Data/BusinessExpectations'
import MultiSelect from 'react-native-multiple-select';
import { useLogin } from '../../context/LoginProvider'
import client from '../../apiRouter/client'
import { useNavigation } from '@react-navigation/native'

const AddNewBusiness = () => {
 
  const [selectedItems, setSelectedItems] = useState([]);
  const [business_name, setbusiness_name] = useState('')
  const [location, setlocation] = useState('')
  const [status, setstatus] = useState('')
  const [category, setcategory] = useState('')
  const [description, setdescription] = useState('')
  const { token,setCallBack } = useLogin()
  const Navigator = useNavigation();

  const onSelectedItemsChange = (selectedItems) => {

    setSelectedItems(selectedItems);

    for (let i = 0; i < selectedItems.length; i++) {
      var tempItem = BusinessExpectationsData.find(item => item.id === selectedItems[i]);
      //console.log(tempItem);
    }

  };

  const addNewBusiness = async (e) => {
    e.preventDefault();
    try {
      setCallBack(true)
      const res = await client.post('/api/business/add', { business_name, location, status, category, expectations: selectedItems,description }, {
        headers: { Authorization: token }
      })
      console.log("🚀 ~ file: addNewBusiness.js ~ line 42 ~ addNewBusiness ~ res", res)
      
      Navigator.navigate('MyBusinesses')

    } catch (error) {
      console.log("🚀 ~ file: addNewBusiness.js ~ line 38 ~ addNewBusiness ~ error", error.response.data)
      Alert.alert(
        error.response.data.message? error.response.data.message: error.response.data.msg
      )
    }
  }
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
                <TextInput onChangeText={setbusiness_name} style={styles.textInput} placeholder='Business Name'></TextInput>
              </View>
              <View style={styles.formInput}>
                <TextInput onChangeText={setlocation} style={styles.textInput} placeholder='Location'></TextInput>
              </View>
              <View style={styles.formInput}>
                <SelectList setSelected={setstatus} search={false} dropdownStyles={{ backgroundColor: '#fff' }} boxStyles={styles.textInput} data={BusinessStatusData} placeholder='Business Status' />
              </View>
              <View style={styles.formInput}>
                <SelectList setSelected={setcategory} search={true} dropdownStyles={{ backgroundColor: '#fff' }} boxStyles={styles.textInput} data={BusinessCategoriesData} placeholder='Business Category' />
              </View>
              <ScrollView horizontal={true} style={{ width: "100%", marginBottom: 10, padding: 10, }}>
                <MultiSelect
                  hideTags
                  items={BusinessExpectationsData}
                  uniqueKey="id"
                  onSelectedItemsChange={onSelectedItemsChange}
                  selectedItems={selectedItems}
                  selectText="Business Expectations"
                  searchInputPlaceholderText="Search business expectations Here..."
                  tagRemoveIconColor="red"
                  tagTextColor="#fff"
                  selectedItemTextColor="#CCC"
                  selectedItemIconColor="#CCC"
                  itemTextColor="#000"
                  displayKey="name"
                  searchInputStyle={{ color: '#000', marginLeft: 10, padding: 10 }}
                  submitButtonColor="#FFB801"
                  submitButtonText="Submit"
                  tagContainerStyle={styles.tag}
                  styleDropdownMenu={{
                    borderWidth: 1,
                    borderColor: '#10006b',
                    borderRadius: 50,
                  }}
                  styleDropdownMenuSubsection={{
                    borderWidth: 0.5,
                    borderColor: '#10006b',
                    borderRadius: 50,
                    padding: 10,
                    width: '100%',
                    maxWidth: 310

                  }}
                  styleMainWrapper={{
                    width: '100%',
                  }}
                  styleTextDropdownSelected={{
                    maxWidth: 310,
                    width: '100%',
                  }}
                />
              </ScrollView>
              <View style={styles.formInput}>
                <TextInput onChangeText={setdescription} style={styles.textInput} placeholder='Business Description' numberOfLines={4} multiline={true}></TextInput>
              </View>
              <View style={styles.formInput}>
                <TouchableOpacity onPress={addNewBusiness} style={styles.defaultButton}>
                  <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }} >Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

    </LinearGradient >
  )
}
const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#2A2B5F',
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
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#10006b',
    color: '#000',
    borderRadius: 50,
    backgroundColor: '#fff',
    placeholderTextColor: "#0000"
  },
  defaultButton: {
    padding: 15,
    backgroundColor: '#FF6D27',
    borderRadius: 50,
  },


})

export default AddNewBusiness