import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import FavoriteScreen from '../Screen/FavoriteScreen/FavoriteScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import  Ionicons  from '@expo/vector-icons/Ionicons';
import Colors from '../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

const Tab= createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel:'Search',
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarIcon:({color,size})=>(
            
            <FontAwesome name="search" size={size} color={color} />
          )
        }} />
        <Tab.Screen name="Favorite" component={FavoriteScreen}  options={{
          tabBarLabel:'Favorite',
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarIcon:({color,size})=>(
            <FontAwesome name="heart-o" size={size} color={color}/>
          )
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen}  options={{
          tabBarLabel:'Profile',
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarIcon:({color,size})=>(
            <FontAwesome name="user-o" size={size} color={color} />
          )
        }} />

    </Tab.Navigator>
  )
}