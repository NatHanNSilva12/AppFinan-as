import React from "react"
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }){
     return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.userName}>{name}</Text>

                 <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser} >
                    <Feather name="user" size={27} color="FFF" />
                 </TouchableOpacity>
            </View>
        </View>
     )
}

const styles = StyleSheet.create({
   container:{
    backgroundColor: '#008080',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
   },
   content:{
     flex: 1,
     alignItems: 'center',
     flexDirection: 'row',
     justifyContent: 'space-between'
   },
   userName:{
    fontSize: 22,
    color: '#FFF',
    font: 'bold'
   },
   buttonUser:{
    width: 44,
    height: 44,
    backgroundColor: '#ecf0f1',
    borderRadius: 44 / 2,
    justifyContent: 'center',
    alignItems: 'center',
   }
})