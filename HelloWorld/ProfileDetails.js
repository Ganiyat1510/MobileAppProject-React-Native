import React, { useEffect, useState } from "react";
import { Image, ActivityIndicator, StyleSheet, Text, View } from "react-native";
import profilePhoto from "./assets/profile.png"

const ProfileDetails = ({id}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const getEmployees = async () => {
    try {
      const response = await fetch(
        `http://localhost:44350/helloworldWebService1.asmx/GetEmployeeById?id=${id}`
      );

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
            <Image style={styles.profileLogo} source={profilePhoto}/>
            <Text style={styles.name}>{data.Name}</Text>
            <View style={styles.details}>
              <Text style={{fontSize: 20}}>ID: {data.Id}</Text>
              <Text style={{fontSize: 20}}>Phone: {data.Phone}</Text>
              <Text style={{fontSize: 20}}>Department: {data.Department.Name}</Text>
              <Text style={{fontSize: 20}}>Address: {data.Street}, {data.City}, {data.State}, {data.ZIP}, {data.Country}</Text>
            </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex", flexDirection: "column", alignItems: "center"
  },
  name: {fontSize: 24, fontWeight: '500', marginBottom: 30},
  profileLogo: {
    width: 120,
    height: 120,
    marginTop: 30,
  },
  space: {
    marginTop: 30,
  },
  details: {display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-around"}
});

export default ProfileDetails;