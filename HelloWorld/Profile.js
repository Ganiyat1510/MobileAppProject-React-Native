import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Text, View, TouchableOpacity } from "react-native";
import ProfileDetails from "./ProfileDetails";
import Employee from "./Employee";

const Profile= () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [empId, setEmpId] = useState(null);

  const getEmployees = async () => {
    try {
      const response = await fetch(
        "http://localhost:44350/helloworldWebService1.asmx/GetEmployees"
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
    <View style={{ flex: 1, padding: 12 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
        
            {/*<Text> Click an Employee to view the profile Details</Text>*/}
        {empId ? (
          <View>
            <ProfileDetails id={empId} />
            <View style={{margin: 30}}>
            <Button title="Back to profile" onPress={() => setEmpId(null)} />
            </View>
          </View>
        ) : null}
        {!empId ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.Id.toString()}
          renderItem={({ item }) => (
        <TouchableOpacity onPress={() => setEmpId(item.Id)}> 
            <Employee name={item.Name} />
         </TouchableOpacity> 
          )}
        />
        ) : null}
        </>
      )}
    </View>
  );
};

export default Profile;
