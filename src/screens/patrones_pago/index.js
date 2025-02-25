import { ScrollView,StyleSheet, Text, SafeAreaView, Image, Button, TouchableOpacity, View } from 'react-native';
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

          <View style={styles.card2}>
             <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{'Tipo Prenda'}</Text>
             </View>

          </View>

        <TouchableOpacity style={styles.botonfiltro}>
          <Image source={require('../../../assets/filtro.png')} style={styles.imagenfiltro} />
        </TouchableOpacity>

        <View style={styles.card2}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{'Est. Clima'}</Text>
          </View>
        </View>

      </View>


      <View style={styles.cardContainer}>

          <View style={styles.card}>
            <Image source={require('../../../assets/calculadora.png')} style={styles.cardImage} />

          <View style={styles.cardContent}>

            <Text style={styles.cardTitle}>{'Producto1'}</Text>
            <Text style={styles.cardDescription}>{'Esto es una bobina'}</Text>

          </View>
          
          <TouchableOpacity style={styles.botoncomprar} onPress={() => {navigation.navigate('');}}>             
              <Text style={styles.buttonTextComprar}>COMPRAR</Text>
              <Image style={styles.imagencomprar} source={require('../../../assets/carrito.jpg')}/>
          </TouchableOpacity>

        </View>

        <View style={styles.card}>

          <Image source={require('../../../assets/calculadora.png')} style={styles.cardImage} />

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{'Producto1'}</Text>
            <Text style={styles.cardDescription}>{'Esto es una bobina'}</Text>
          </View>

          <TouchableOpacity style={styles.botoncomprar} onPress={() => {navigation.navigate('');}}>             
              <Text style={styles.buttonTextComprar}>COMPRAR</Text>
              <Image style={styles.imagencomprar} source={require('../../../assets/carrito.jpg')}/>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.cardContainer}>

        <View style={styles.card}>

          <Image source={require('../../../assets/calculadora.png')} style={styles.cardImage} />

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{'Producto1'}</Text>
            <Text style={styles.cardDescription}>{'Esto es una bobina'}</Text>
          </View>

          <TouchableOpacity style={styles.botoncomprar} onPress={() => {navigation.navigate('');}}>             
              <Text style={styles.buttonTextComprar}>COMPRAR</Text>
              <Image style={styles.imagencomprar} source={require('../../../assets/carrito.jpg')}/>
          </TouchableOpacity>

        </View>

        <View style={styles.card}>

          <Image source={require('../../../assets/calculadora.png')} style={styles.cardImage} />

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{'Producto1'}</Text>
            <Text style={styles.cardDescription}>{'Esto es una bobina'}</Text>
          </View>

          <TouchableOpacity style={styles.botoncomprar} onPress={() => {navigation.navigate('');}}>             
              <Text style={styles.buttonTextComprar}>COMPRAR</Text>
              <Image style={styles.imagencomprar} source={require('../../../assets/carrito.jpg')}/>
          </TouchableOpacity>

        </View>

      </View>


      <View style={styles.cardContainer}>

        <View style={styles.card}>

          <Image source={require('../../../assets/calculadora.png')} style={styles.cardImage} />

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{'Producto1'}</Text>
            <Text style={styles.cardDescription}>{'Esto es una bobina'}</Text>
          </View>

          <TouchableOpacity style={styles.botoncomprar} onPress={() => {navigation.navigate('');}}>             
              <Text style={styles.buttonTextComprar}>COMPRAR</Text>
              <Image style={styles.imagencomprar} source={require('../../../assets/carrito.jpg')}/>
          </TouchableOpacity>

        </View>

        <View style={styles.card}>

          <Image source={require('../../../assets/calculadora.png')} style={styles.cardImage} />

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{'Producto1'}</Text>
            <Text style={styles.cardDescription}>{'Esto es una bobina'}</Text>
          </View>

          <TouchableOpacity style={styles.botoncomprar} onPress={() => {navigation.navigate('');}}>             
              <Text style={styles.buttonTextComprar}>COMPRAR</Text>
              <Image style={styles.imagencomprar} source={require('../../../assets/carrito.jpg')}/>
          </TouchableOpacity>

        </View>
      </View>

      <TouchableOpacity style={styles.botonvolver} onPress={() => {navigation.navigate('Menu Principal');}}>
        <Text style={styles.buttonText}>VOLVER AL MENÚ PRINCIPAL</Text>
      </TouchableOpacity>
      
  </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
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
    borderRadius: 5, 
    backgroundColor: 'red',
    marginBottom:10,
    marginLeft:20,
    paddingLeft:10,
    color:'white',

  },

  botonvolver: {
    width: '57%',
    borderRadius: 5, 
    backgroundColor: '#482337',
    marginBottom:10,
    marginLeft:30,

  },
  
  buttonText: {
    backgroundColor: '#482337',
    padding: 13,  
    borderRadius: 8,
    color: '#fff',
    fontSize:16,
    justifyContent: 'center', 
    alignItems: 'center',     

  },

  buttonTextComprar: {
    backgroundColor: 'red',
    padding: 10,  
    borderRadius: 8,
    color: 'white', 
    fontSize:14,
    width: 100,   
    height: 40,   
    justifyContent: 'center',  
    alignItems: 'center',    
    fontWeight:'bold',
      },

  botonfiltro: {
    width: '20%',
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
    
},
cardDescription:  
{
    fontSize: 14,
},
cardContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  
},
linearGradient: {
  flex: 1,
}

});


export default App

