import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import BotaoEntrar from '../../components/common/BotaoEntrar';

export default function Init() {
  return (
    <View style={{flex: 1, backgroundColor: "#000", justifyContent: 'center', alignItems: "center"}}>
        <Image source={require("../../assets/logo.png")} style={{height: 150, width: 170}}/>
        <Text style={{fontSize: 70, color: "#fff", fontFamily: "Jersey"
        }}>Monetto</Text>
        <BotaoEntrar />
    </View>
  )
}
