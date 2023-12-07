import React, { useEffect, useState } from "react";
import { Image, StyleSheet, FlatList, Text, View, Button} from "react-native";
import ROI_Logo from './assets/ROI_Logo.jpg';


const Home = ({navigation}) => {
  return(
    <View style={styles.container}>
      
     <Image style={styles.roiLogo}source={ROI_Logo}/>

      <View style={{margin: 30}}>

      <View style={{margin: 10}}>
        <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} /> 
      </View>
      <View style={{margin: 10}}>
        <Button title="Go to Add" onPress={() => navigation.navigate('Add')} />
      </View>
      <View style={{margin: 10}}>
        <Button title="Go to Update" onPress={() => navigation.navigate('Update')} />
      </View>
      <View style={{margin: 10}}>
        <Button title="Go to Delete" onPress={() => navigation.navigate('Delete')} />
      </View>
      
     </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 24
  },
  roiLogo: {
    width: 200,
    height: 100,
  },
  space: {
    marginTop: 30,
  },
});

export default Home;
