import { View, Text,TouchableOpacity, StyleSheet, ImageBackground,ScrollView,TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const handle =  ()=>{
  
        navigation.navigate('home');
      }
      const [isChecked, setIsChecked] = useState(false);

    return (
      <ImageBackground
      source={require('../image/empty.png')}
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.container}>
      <View style={styles.content}>
          
   <View  className='mt-24' >
        <Text className="   text-white text-center font-bold text-lg p-2 bg-[#21632c]	 px-3  border border-green-200 mt-24 ml-8 mr-8">Username</Text>
        <TextInput
        placeholder='Enter username'
         className="bg-[#21632c] border  mb-4 ml-8 mr-8 "style={{
            borderWidth: 1,        
            borderColor: 'rgba(0, 0, 0, 0.3)',            backgroundColor: 'white',

          }}></TextInput>
            
       <Text className="   text-white text-center font-bold text-lg p-2 bg-[#21632c]	 px-3  border border-green-200 ml-8 mr-8">Password</Text>
       <TextInput
        placeholder='Enter username'
        secureTextEntry={true} 
         className=" border bg-white mb-4 ml-8 mr-8 "style={{
            borderWidth: 1,        
            borderColor: 'rgba(0, 0, 0, 0.3)',            backgroundColor: 'white',

          }}></TextInput>
          <View>
            <TouchableOpacity className='ml-8'
      style={styles.checkboxContainer}
      onPress={() => setIsChecked(!isChecked)}
    >
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text className='bg-white  text-lg' style={styles.label}>Remember Me</Text>
    </TouchableOpacity>
    </View>
      
       <TouchableOpacity onPress={handle} className="pt-5" >
              <Text className=" text-white text-center font-bold text-base p-2 bg-[#21632c]	 px-3  border border-green-200 ml-8 mr-8">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity  className="pt-5 mb-3" >
          <View className='flex-row justify-center' style={{ flex: 1, alignItems: 'center' }}>
          <FontAwesomeIcon className=''  size={15} color="grey" />
          <Text className=" bg-white  text-lg font-bold  ">Forget your password?</Text>
          </View>
          </TouchableOpacity>
          
          </View>
          <View className='flex-row justify-center mt-10' style={{ flex: 1, alignItems: 'center' }} >
          

          

</View>  

</View> 
 
 </ScrollView>
 </ImageBackground> 
  )
  }
  const styles = StyleSheet.create({
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: 20,
      height: 20,
       
      borderColor: 'rgba(0, 0, 0, 0.2)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checked: {
      backgroundColor: '#556ee6',
      borderColor: 'blue',
    },
    checkmark: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#fff',
    },
    label: {
      marginLeft: 8,
      fontSize: 16,
      color: '#333',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', 
    },
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    content: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust the background color and opacity as needed
      padding: 20,
    },
  });
