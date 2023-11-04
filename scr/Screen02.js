import {React, useEffect, useState } from 'react';
import {View, Text,TouchableOpacity,Pressable ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function Screen02({ navigation }) {

  const [data, setData]=useState([]);
    useEffect(()=>{
        fetch("https://6545b984fe036a2fa954b827.mockapi.io/shop")
        .then(response => response.json())
        .then(setData)
    }
    ,[])
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center',gap:5}}>
         {data.map((item)=>{
             return(
              <Pressable onPress={() => { navigation.navigate('Drinks')}}>
              <View style={{borderRadius: 16, marginBottom:10, backgroundColor: '#ffff'}}>
              <Image source={{uri: item.image}} style={{width: 300, height: 80, borderRadius: 16}}/>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
  
              {item.status? <Text style={{color:'green'}}>
              <AntDesign name='check' size='20' color='green' />
              Accepting Order
              </Text> : <Text style={{color:'red'}}>
              <Ionicons name='lock-closed-outline' size='20' color='red' />
              Tempory Unavailable
              </Text>}
              <Text style={{color:'red'}}><Ionicons name='time-outline' size='25' color='green' />{item.time}</Text>
              <Ionicons name='location-outline' size='20' color='green' />
              </View>
              <Text>{item.name}</Text>
              <Text>{item.address}</Text>
              </View>
          </Pressable>
          ) })}
      </View>
    );
  }
