import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Add from './Add';
import Delete from './Delete';
import Profile from './Profile';
import Update from './Update';
import Home from './Home';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Welcome to ROI Staff Directory</Text>
      <Home navigation={navigation}/>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Staff Profile</Text>

      <Profile navigation={navigation}/>
      <Button title="Go to back Home" onPress={() => navigation.navigate('Home')} />
      
   </View>
 );
}

function UpdateScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Update An Employee Detail</Text>

      <Update navigation={navigation}/>

      <Button title="Go  back to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Go to back Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function AddStaff({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add An Employee</Text>

      <Add navigation={navigation}/>

      <Button title="Go  back to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Go to back Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}



function DeleteStaff({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Delete An Employee</Text>

      <Delete />

      <Button title="Go  back to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Go to back Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Add" component={AddStaff} />
        <Stack.Screen name="Update" component={UpdateScreen} />
        <Stack.Screen name="Delete" component={DeleteStaff} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
