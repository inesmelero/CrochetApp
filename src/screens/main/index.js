import React,{ useState } from 'react';
import { Alert,StyleSheet, Text, SafeAreaView, Image, TextInput, TouchableOpacity, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';  


export default function Main(){

    const navigation = useNavigation();  

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /*He querido hacer una constante con una funcionalidad del usuario y la contraseña, para ver que me iba
    tienes que meter en el usuario: ines y contraseña: 1234 para poder acceder*/
    const handleLogin = () => {
      const validUsername = 'ines';
      const validPassword = '1234';
      console.log('Botón de Iniciar sesión presionado');
      if (username === validUsername && password === validPassword) {
        navigation.navigate('Menu Principal');
      } else {
        /*Si la contraseña es incorrecta te da un error*/
        console.log('Invalidas credenciales');
        Alert.alert("Error", "Las credenciales no son correctas.")
      }
  }

  const handleOlvidarContraseña = () => {
    console.log('Botón de Olvidar Contraseña sesión presionado');
    navigation.navigate('Olvidar Contraseña');
};

const handleCrearCuenta = () => {
  console.log('Botón de mi Perfil presionado');
  navigation.navigate('Crear cuenta'); 
};

    return(

      <LinearGradient
      colors={['#8B6B97', '#89BECF', '#8B6B97']}
      style={styles.linearGradient}
    >
    <SafeAreaView style={styles.container}>

        <Image style={styles.image} source= {require('../../../assets/logo.png')}/>

        <Text style={styles.text_titulo}>¡Bienvenid@!</Text>

        <TextInput
          style={styles.input1}
          placeholder="Usuario"
          onChangeText={(text) => setUsername(text)}
          value={username}
          />

        <TextInput
          style={styles.input2}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
          />  

    <View>
     
      <TouchableOpacity
        style={styles.button_restablecerContra}
        onPress={handleOlvidarContraseña}  
      >
        <Text style={styles.texto_restableContra}>¿Restablecer contraseña?</Text>
      </TouchableOpacity>
    </View>

          <TouchableOpacity style={styles.button_iniciar} onPress={handleLogin}>
            <Text style={styles.texto_iniciarSesion}>Iniciar sesión</Text>
          </TouchableOpacity>

          <View style={styles.linea}></View>

          <Text style={styles.text_crearCuenta} >¿Aún no tienes cuenta?</Text>

          <TouchableOpacity style={styles.button_crearcuenta}>

          <Text style={styles.texto_iniciarSesion} onPress={handleCrearCuenta}>Crear cuenta</Text>


          </TouchableOpacity>
    </SafeAreaView>
    </LinearGradient>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 100,
      
    },
  
    text_titulo:{
      color: '#482337',
      fontSize:45,
      fontWeight: 'bold',
    },

    image:{

      width:210,
      height: 210,
      resizeMode: 'cover',
      borderWidth: 8,  
      borderColor: '#482337',
      borderRadius: 20,

    },

    linearGradient: {
      flex: 1,
    },

    input1: {
      
      height: 40,
      backgroundColor: 'white',
      marginTop:20,
      borderRadius: 20,
      borderColor: '#482337',
      fontSize: 16,
      borderRadius: 20,
      width:300,
      borderWidth: 4,  
      textAlign:'center',
    },

    input2: {
      
      height: 40,
      backgroundColor: 'white',
      marginTop:20,
      borderRadius: 20,
      borderColor: '#482337',
      fontSize: 16,
      width:300,
      textAlign:'center',
      borderRadius: 20,
      borderWidth: 4,  
    },

    button_iniciar: {
      backgroundColor: '#482337',
      marginTop: 20,
      padding: 15,  
      borderRadius: 10,
      width: 200,   
      height: 50,   
      justifyContent: 'center',  
      alignItems: 'center',     
    },

    button_restablecerContra: {
    
      padding: 2,
      marginLeft:100,
     
    },

    texto_restableContra: {
      color:'#482337',
      textDecorationLine: 'underline',
      fontSize: 17,  
    
    },

    texto_iniciarSesion: {

      color: 'white',
      fontFamily:'Roboto',
      fontSize: 18,    
      fontWeight: 'bold',  
    },

    linea: {
      width: 300,        
      height: 2,         
      backgroundColor: '#482337',  
      marginTop: 40,     
    },

    text_crearCuenta: {

      color: '#482337',
      fontSize:20,
      fontWeight: 'bold',
      textAlign:'center',
      marginTop: 40, 

    },

    button_crearcuenta: {
      backgroundColor: '#482337',
      marginTop: 20,
      padding: 15,  
      borderRadius: 10,
      width: 200,   
      height: 50,   
      justifyContent: 'center', 
      alignItems: 'center',     
    },

  })