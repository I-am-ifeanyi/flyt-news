import React from 'react'
import {View, Text, StyleSheet, Image} from "react-native"

const Logo = () => {
  return (
    <View>
        <Image source={require("../../assets/images/flytNewsLogo.png")}/>
        <View>
            <Text>Flyt</Text>
         <Text>News</Text>
         </View>
    </View>
  )
}

export default Logo