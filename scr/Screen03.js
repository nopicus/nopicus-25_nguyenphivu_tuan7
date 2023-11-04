import {React, useEffect, useState } from 'react';
import {View, Text,TouchableOpacity,Pressable ,Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
export default function Screen03({ navigation }) {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch("https://6545b984fe036a2fa954b827.mockapi.io/drinks")
        .then(response => response.json())
        .then(setData)
    }
    ,[]) 
const Item = ({obj})=>(
     <View style={{flex:1, gap:20}}>
    <View style={{ 
    width:300,
    height: 100,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor:'#fffff',
    justifyContent: "space-between",
    marginVertical: 5,
    flexDirection:'row',
    }}>
    <Image
     style={{ width: 100, height: 100 }}
     source={{ uri: obj.image }}
     resizeMode="contain">
    </Image>
    <Text style={{ fontSize: 16, fontWeight: 500, paddingHorizontal: 10 }}>
    {obj.name}
    </Text>
    <Text style={{ padding:10}}>
    <Ionicons name='play-outline' size='30' color='green' />
    ${obj.price}
    </Text>
    <Ionicons name='add-circle-sharp' size='30' color='green' />
    <Ionicons name='remove-circle-sharp' size='30' color='green' />
    </View>
    </View>

)
return(
    <View style={{flex:1 ,justifyContent:'center',alignItems:'center'}}>
      <FlatList
        data={data}//lấy dữ liêu từ mảng
        //numColumns={2}// số cột hiển thị
        renderItem={({ item }) => <Item obj={item}></Item>}// hiển thị dữ liệu từ item
        keyExtractor={(item) => item.id}// lấy id
        ></FlatList>
        <Pressable
          onPress={() => navigation.navigate('Your orders')}
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
            GO TO CART
          </Text>
        </Pressable>
    </View>
)
}