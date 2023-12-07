import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

const Read = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          // keyExtractor={({ id }) => id}
          keyExtractor={(item, id) => index}
          renderItem={({ item }) => (
            <Text>
              {item.Id},{item.Name}, {item.Phone}, {item.Department.Name}, {item.Street}, {item.City}, {item.State}, {item.ZIP}, {item.Country}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default Read;