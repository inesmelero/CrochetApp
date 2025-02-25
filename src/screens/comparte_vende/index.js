import { ScrollView,StyleSheet, Text, SafeAreaView, Image, Button, TouchableOpacity, View, Dropdown } from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';


function App({ navigation }) {

  return (

    <LinearGradient
    colors={['#8B6B97', '#89BECF', '#8B6B97']}
    style={styles.linearGradient}
  >


    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    
      <View style={styles.cardContainer}>
        <View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{'Producto1'}</Text>
          <Image source={require('../../../assets/calculadora.png')} style={styles.cardImage} />
        </View>
          <TouchableOpacity style={styles.botoncomprar} onPress={() => {navigation.navigate('');}}>             
              <Text style={styles.buttonTextComprar}>COMPRAR</Text>
              <Image style={styles.imagencomprar} source={require('../../../assets/carrito.jpg')}/>
        </TouchableOpacity>
        </View>
        <View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{'Producto2'}</Text>
          <Image source={require('../../../assets/calculadora.png')} style={styles.cardImage} />
        </View>
          <TouchableOpacity style={styles.botoncomprar} onPress={() => {navigation.navigate('');}}>             
              <Text style={styles.buttonTextComprar}>COMPRAR</Text>
              <Image style={styles.imagencomprar} source={require('../../../assets/carrito.jpg')}/>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{'Producto3'}</Text>
          <Image source={require('../../../assets/calculadora.png')} style={styles.cardImage} />
        </View>
          <TouchableOpacity style={styles.botoncomprar} onPress={() => {navigation.navigate('');}}>             
              <Text style={styles.buttonTextComprar}>COMPRAR</Text>
              <Image style={styles.imagencomprar} source={require('../../../assets/carrito.jpg')}/>
        </TouchableOpacity>
        </View>
        <View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{'Producto4'}</Text>
          <Image source={require('../../../assets/calculadora.png')} style={styles.cardImage} />
        </View>
          <TouchableOpacity style={styles.botoncomprar} onPress={() => {navigation.navigate('');}}>             
              <Text style={styles.buttonTextComprar}>COMPRAR</Text>
              <Image style={styles.imagencomprar} source={require('../../../assets/carrito.jpg')}/>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{'Producto5'}</Text>
          <Image source={require('../../../assets/calculadora.png')} style={styles.cardImage} />
        </View>
          <TouchableOpacity style={styles.botoncomprar} onPress={() => {navigation.navigate('');}}>             
              <Text style={styles.buttonTextComprar}>COMPRAR</Text>
              <Image style={styles.imagencomprar} source={require('../../../assets/carrito.jpg')}/>
        </TouchableOpacity>
        </View>
        <View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{'Producto6'}</Text>
          <Image source={require('../../../assets/calculadora.png')} style={styles.cardImage} />
        </View>
          <TouchableOpacity style={styles.botoncomprar} onPress={() => {navigation.navigate('');}}>             
              <Text style={styles.buttonTextComprar}>COMPRAR</Text>
              <Image style={styles.imagencomprar} source={require('../../../assets/carrito.jpg')}/>
        </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.botonvolver} onPress={() => {navigation.navigate('Menu Principal');
      }}>
    <Text style={styles.buttonText}>VOLVER AL MENÚ PRINCIPAL</Text>
    
  </TouchableOpacity>
  </ScrollView>
 
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  linearGradient: {
    flex: 1,
  },
  
  scrollContainer: {
    padding: 10,
    alignItems: 'center',
},
   imagencomprar:{
    width:50,
    height:50,
    borderRadius: 5,
    resizeMode: 'contain',
    backgroundColor: 'red',
  },

  botoncomprar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    borderRadius: 5, // Optional: adds rounded corners
    backgroundColor: 'red',
    marginBottom:10,
    marginLeft:20,
    paddingLeft:10,
    color:'white',

  },

  botonvolver: {
    width: '57%',
    borderRadius: 5, // Optional: adds rounded corners
    backgroundColor: '#482337',
    marginBottom:10,
    marginLeft:30,

  },
  
  buttonText: {
    backgroundColor: '#482337',
    padding: 13,  // Incrementa el relleno interno para hacer el botón más grande
    borderRadius: 8,
    color: '#fff', // Text color
    fontSize:16,
    justifyContent: 'center',  // Centra el texto verticalmente
    alignItems: 'center',      // Centra el texto horizontalment

  },

  buttonTextComprar: {
    backgroundColor: 'red',
    padding: 10,  // Incrementa el relleno interno para hacer el botón más grande
    borderRadius: 8,
    color: 'white', // Text color
    fontSize:14,
    width: 100,   // Cambia el ancho para hacerlo más amplio
    height: 40,   // Establece una altura para un mayor tamaño vertical
    justifyContent: 'center',  // Centra el texto verticalmente
    alignItems: 'center',      // Centra el texto horizontalment
    fontWeight:'bold',
      },

  botonfiltro: {
    width: '20%',
    // ... other styles
  },
  
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    
    width:200,

    elevation: 5,
    margin: 10,
},

imagenfiltro:{
  width:50,
  height:50,
  marginLeft:'20%',
  marginTop:'10%'
},


card2: {
  borderRadius: 8,
  width:130,
  margin: 10,
},

cardImage: {
    width: '90%',
    height: 100,
    marginLeft:10
},
cardImage2: {
  width: '45%',
  height: 50,
  marginLeft:30
},
cardContent: {
    padding: 16,
    
},
cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:10
    
},
cardDescription:  
{
    fontSize: 14,
},
cardContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  
},
});


export default App
