import {React, useEffect, useState } from 'react';
import {View, Text,TouchableOpacity,Pressable ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
export default function Screen01({ navigation }) {
   const [data, setData]=useState([]);
  useEffect(()=>{
      fetch("https://653f48409e8bd3be29e02746.mockapi.io/shop")
      .then(response => response.json())
      .then(setData)},[])
  
    return (
      <View style={{ flex:1 ,alignItems:'center',justifyContent:'center' ,gap:20}}>
        <Text style={{fontFamily:'Inter',
        fontSize:24,
        alignItems:'center',
        textAlign:'center',
        marginBottom:20,
        fontWeight: 'bold'}} >
          Welcome to Cafe world
        </Text>
        {data.map((item)=>{
          return(
            <View style={{width: 250, height: 80, borderRadius: 16}}>
               <Pressable><Image source={URL=item.img} style={{width: 250, height: 80, borderRadius: 16}}/></Pressable>
            </View>
          )  
        })}
          <TouchableOpacity style={{flexDirection:'row'}}>
          <Pressable style={{backgroundColor:"cyan", width: 200, height: 50, justifyContent:'center', alignItems: 'center', borderRadius: 10 }} 
        onPress={() => { navigation.navigate('Shops Near Me')}}>
          <Text style={{fontWeight:700,fontSize:20}}>Start get</Text>
          </Pressable>
         </TouchableOpacity>
      </View>
   
    );
  }