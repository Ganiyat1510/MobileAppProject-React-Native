import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import profilePhoto from "./assets/profile.png"

const Employee = ({name}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.profileLogo} source={profilePhoto}/>
            <Text style={{fontSize: 20, fontWeight: 500}}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex', 
    alignItems: 'center', 
    flexDirection: 'row',
    padding: 4, 
    gap: 8,
    margin: 2,
    border: "1px solid lightgray",
    borderRadius: 4,
  },
  profileLogo: {
    width: 50,
    height: 50,
  },
  space: {
    marginTop: 30,
  },
});

export default Employee;
