import React, {useState} from 'react';
import {Button, Text, View, TextInput,Alert} from 'react-native';

const Add = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  
  const [employee, setEmployee] = useState(
  { 
    name :  "",            
    phone : "",
    department: "",
    street: "",
    city: "",
    state:"",
    zip: "",
    country:""
  }

     
  );
  
  const onChangeName = (value) => {
      setEmployee({...employee, name:value});
  } 

  const onChangePhone = (value) => {
    setEmployee({...employee, phone:value});
} 
  const onChangeDepartment = (value) => {
  setEmployee({...employee, department:value});
} 

const onChangeStreet = (value) => {
  setEmployee({...employee, street:value});
} 

const onChangeCity = (value) => {
  setEmployee({...employee, city:value});
} 

const onChangeState = (value) => {
  setEmployee({...employee, state:value});
} 

const onChangeZIP = (value) => {
  setEmployee({...employee, zip:value});
} 

const onChangeCountry = (value) => {
  setEmployee({...employee, country:value});
}

const clsEmployeeTxtBoxes= () => {
  
  setEmployee({...employee, name: '', phone:'', department: '', street: '', city: '', state: '', zip: '',country: '' });
  
  // employee.name=" ";
  // employee.phone=" "; 
  // employee.department=" ";
  // employee.street=" ";
  // employee.city=" ";
  // employee.state=" ";
  // employee.zip=" ";
  // employee.country=" ";

};

  const showAlert = () =>
  Alert.alert(
    'Information',
    'An employee is added',
    [
      {
        text: 'Cancel'
      },
    ],
  );

const addEmployee = () =>
{
    let employeeInfo = `id= ${employee.id}&name= ${employee.name}&phone=${employee.phone}&department=${employee.department}&street=${employee.street}
   &city=${employee.city}&state=${employee.state}&zip=${employee.zip}&country=${employee.country}`;
   fetch("http://localhost:44350/helloworldWebService1.asmx/AddEmployee",
   {
    method: "Post",
    headers:
    {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: employeeInfo,
   }
   )
    . then( (responseData) => {
    
     clsEmployeeTxtBoxes();
     showAlert();
     console.log("Done");
   }
   ).catch((err) => {
      console.log(err);
   })
}

 
  return (
  <View style={{flex: 1, padding: 24}}>
    <TextInput placeholder="Name" value ={employee.name} onChangeText = { (value) => onChangeName(value)}/>    
    <TextInput placeholder="Phone"value ={employee.phone} onChangeText = { (value) => onChangePhone(value)} />
    <TextInput placeholder="Department"value ={employee.department} onChangeText = { (value) => onChangeDepartment(value)} />
    <TextInput placeholder="Street" value ={employee.street} onChangeText = { (value) => onChangeStreet(value)}/>
    <TextInput placeholder="City" value ={employee.city} onChangeText = { (value) => onChangeCity(value)}/>
    <TextInput placeholder="State" value ={employee.state} onChangeText = { (value) => onChangeState(value)}/>
    <TextInput placeholder="ZIP" value ={employee.zip} onChangeText = { (value) => onChangeZIP(value)}/>
    <TextInput placeholder="Country" value ={employee.country} onChangeText = { (value) => onChangeCountry(value)}/>
    
    <Button title = "Add An Employee" onPress ={addEmployee}></Button>
    
  </View>
  
  );
 
};

export default Add;