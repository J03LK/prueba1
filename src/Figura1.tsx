import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Figura1 = () => {
    return (
        <View style={style.container}>
            <Text style={style.box1}></Text>
            <Text style={style.box2}></Text>
            <Text style={style.box3}></Text>
            
        </View>
    )
    }
    
    const style = StyleSheet.create({
        container:{
            flex:1,
            borderWidth:2,
            marginTop: 50,
            backgroundColor: 'powderblue', 
            alignItems:'flex-end',
            flexWrap:'wrap-reverse' //alinear los elementos
    
        },
        box1:{
            backgroundColor:'yellow',
            //flex:1,
            width:50,
            height:50,
            borderWidth:3,
            borderColor:'blue',
            fontSize: 30,
            //alignSelf: 'flex-end'
        },
        box2:{
            backgroundColor:'orange',
            flex:1, 
            width:50,
            height:50,       
            borderWidth:3,
            borderColor:'blue',
            fontSize: 30
        },
        box3:{
            backgroundColor:'brown',
            
            width:50,
            height:50,
            borderWidth:3,
            borderColor:'blue',
            fontSize: 30
        }
    })  