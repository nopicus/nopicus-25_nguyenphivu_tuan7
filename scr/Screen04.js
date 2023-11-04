import {React, useEffect, useState } from 'react';
import {View, Text,TouchableOpacity,Pressable ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
export default function Screen04({ navigation }) {
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center', gap:10}}>
        <View style={{backgroundColor:'#00BDD6',width:340,height:100,marginBottom:10,borderRadius:10}}>
        <Text style={{fontWeight: 200,fontSize: 20,color:'white'}}>CAFE DELIVERY</Text>
        <Text style={{fontWeight: 200,fontSize: 20,color:'white',textAlign: 'right'}}>$5</Text>
        <Text style={{fontWeight: 200,fontSize: 20,color:'white',textAlign: 'auto'}}>Order #18</Text>
        </View>
        <View style={{backgroundColor:'#8353E2',width:340,height:100,marginBottom:10,borderRadius:10}}>
        <Text style={{fontWeight: 200,fontSize: 20,color:'white'}}>CAFE </Text>
        <Text style={{fontWeight: 200,fontSize: 20,color:'white',textAlign: 'right'}}>$25</Text>
        <Text style={{fontWeight: 200,fontSize: 20,color:'white',textAlign: 'auto'}}>Order #18</Text>
        </View>
        <View style={{ 
    width:350,
    height: 80,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor:'#fffff',
    justifyContent: "space-between",
    marginVertical: 5,
    flexDirection:'row',
    }}>
    
    <Image source={require('../assets/Salt.png')} style={{width:'100%', height:'65%'}}/>
   
    </View>
    <View style={{ 
    width:350,
    height: 80,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor:'#fffff',
    justifyContent: "space-between",
    marginVertical: 5,
    flexDirection:'row',
    }}>
    
    <Image source={require('../assets/Weasel.png')} style={{width:'100%', height:'65%'}}/>
    
    </View>
        <Pressable
          onPress={() => { navigation.push('Trang chu')}}
          style={{
            width: "347px",
            height: "44px",
            borderRadius: 6,
            backgroundColor: "rgba(239, 176, 52, 1)",
            marginVertical: 25,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>
            PAY NOW
          </Text>
        </Pressable>
        </View>
    )
}