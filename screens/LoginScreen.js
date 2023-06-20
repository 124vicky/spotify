import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList,
  StatusBar,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo, MaterialIcons } from '@expo/vector-icons';


const LoginScreen = () => {
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{flex:1}}>

      <SafeAreaView styles={{marginTop:StatusBar.currentHeight}}>
        <View styles={{height:80}} />
        <Entypo name="spotify" style={{textAlign:"center"}} size={80} color="white" />
        <Text style={{color:"white", fontSize:40, fontWeight:'bold', textAlign:"center",marginTop:40}}>Millions of songs free on spotify</Text>
        <View style={{height:80}}/>

        <Pressable style={{backgroundColor: '#1D8954',padding:10,marginLeft: 'auto',marginRight: 'auto',width: 300,borderRadius: 25, alignItems:'center'}}>
          <Text>Sign in with Spotify</Text>
        <Pressable style={{backgroundColor:"#131624", padding:10, marginLeft:'auto', marginRight:'auto', width:300, borderRadius:25, alignItems:'center', flexDirection:'row', alignItems:"center", marginVertical:'10'}}>
        </Pressable>
          <MaterialIcons name="phone-android" size={24} color="white" />
          <Text style={{fontWeight:"500", color:"white", textAlign:"center"}}>Continue with Phone number</Text>
        </Pressable>
      </SafeAreaView>

    </LinearGradient>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})