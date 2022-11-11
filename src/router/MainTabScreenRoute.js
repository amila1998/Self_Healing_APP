import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import {Ionicons,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../screen/Profile';
import Home from '../screen/Home';
import Colors from '../Styles/Colors';
import Shop from '../screen/Shop';
import MyWorks from '../screen/MyWorks';
import Notifications from '../screen/Notifications';
import Businesses from '../screen/businesses/Businesses';
import MyBusinesses from '../screen/businesses/MyBusinesses';
import AddNewBusiness from '../screen/businesses/AddNewBusiness';
import MyBusinessDetails from '../screen/businesses/MyBusinessDetails';
import BusinessDetails from '../screen/businesses/BusinessDetails';
import ViewInvestorGigs from '../screen/investorGigs/ViewInvestorGigs';
import Addgig from '../screen/investorGigs/Addgig';
import EditGig from '../screen/investorGigs/EditGig';
import Reviews from '../screen/reviews/Reviews';

// import HomeScreen from './HomeScreen';
// import DetailsScreen from './DetailsScreen';
// import ExploreScreen from './ExploreScreen';
// import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.buttons.orange}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#36455A',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#36455A',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
        />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: 'Shop',
          tabBarColor: '#36455A',
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Work"
        component={MyWorks}
        options={{
          tabBarLabel: 'My Work',
          tabBarColor: '#36455A',
          tabBarIcon: ({ color }) => (
            <Ionicons name="briefcase" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#36455A',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={26} />
          ),
          tabBarBadge: 3,
        }}
      />
     
    </Tab.Navigator>
);

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#36455A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home2" component={Home}  options={{
        title:'Home',
        headerShown: false
        }} />
        <HomeStack.Screen name="Businesses" component={Businesses}  options={{
        title:'Businesses',
        headerShown: true
        }} />
          <HomeStack.Screen name="BusinessDetails" component={BusinessDetails}  options={{
        title:'Business Details',
        headerShown: true
        }} />
          <HomeStack.Screen name="AddAdvisorGig" component={AddAdvisorGig}  options={{
        title:'AddAdvisorGig',
        headerShown: true
        }} />
        <HomeStack.Screen name="ViewInvestorGigs" component={ViewInvestorGigs}  options={{
        title:"",
        headerShown: true
        }} />
        <HomeStack.Screen name="Addgig" component={Addgig}  options={{
        title:"",
        headerShown: true
        }} />
        <HomeStack.Screen name="EditGig" component={EditGig}  options={{
        title:"",
        }} />
        <HomeStack.Screen name="Reviews" component={Reviews}  options={{
        title:'Reviews',
        headerShown: true
        }} />
    </HomeStack.Navigator>
    );

    const ProfileStackScreen = ({navigation}) => (
      <ProfileStack.Navigator screenOptions={{
              headerStyle: {
              backgroundColor: '#36455A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold'
              }
          }}>
              <ProfileStack.Screen name="Profile2" component={Profile}  options={{
          title:'Profile',
          headerShown: false
          }} />
          <ProfileStack.Screen name="MyBusinesses" component={MyBusinesses}  options={{
          title:'My Businesses',
          headerShown: true
          }} />
           <ProfileStack.Screen name="AddNewBusiness" component={AddNewBusiness}  options={{
          title:'Add New Business',
          headerShown: true
          }} />
            <ProfileStack.Screen name="MyBusinessDetails" component={MyBusinessDetails}  options={{
          title:'My Business Details',
          headerShown: true
          }} />
      </ProfileStack.Navigator>
      );

export default MainTabScreen;

