import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Figura4 = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.box1}></Text>
        <Text style={styles.box2}></Text>
      </View>
      <Text style={styles.box3}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'powderblue',
    padding: 10, 
    justifyContent: 'space-between',
  },
  box1: {
    width: 50,
    height: 50,
    borderWidth:3,
    borderColor:'blue',
    backgroundColor: 'yellow',
    marginRight: 10,
  },
  box2: {
    width: 50,
    height: 50,
    borderWidth:3,
    borderColor:'blue',
    backgroundColor: 'orange',
    marginBottom: 10,
    alignSelf:'center'
    
  },
  box3: {
    width: 50,
    height: 50,
    borderWidth:3,
    borderColor:'blue',
    backgroundColor: 'brown',
    marginBottom: 10,
    alignSelf:'flex-end',
    flexDirection:'column'
    
  }
});
