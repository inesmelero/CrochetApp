import {StyleSheet, Text, SafeAreaView, View, Image, TextInput} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';


function App() {
  return (
    
    <LinearGradient
    colors={['#8B6B97', '#89BECF', '#8B6B97']}
    style={styles.linearGradient}
  >

    <SafeAreaView style={styles.container}>
      <View style={styles.posicion_foto}>
        <View style={styles.card}>
          <Text style={styles.cardDescription}>{'HISTORIAL DE VENTAS'}</Text>
        </View>
        <Image source={require('../../../assets/persona1.png')} style={styles.image} />
      </View>
     

      <View style={styles.line} /> 
      
      <View style={styles.posicion_foto_resto}>
        <View style={styles.card_caja}>
        </View>
        <TextInput
          style={styles.input1}
          placeholder="Introduce el mes numérico"
          />
      </View>

      <View style={styles.posicion_foto_resto}>
        <View style={styles.card_caja}>
        </View>
        <TextInput
          style={styles.input1}
          placeholder="Introduce el año"
          />
      </View>

      <View style={styles.totales}>
        <Text style={styles.totales_Texto}>Total ventas:</Text>
        <Text style={styles.totales_Texto}>Número de productos vendidos: </Text>
      </View>


    </SafeAreaView>
    
    
    </LinearGradient>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop:40,
    

  },

  pluma:{width:60,height:60},

  posicion_foto:{
    flex:1, 
    flexDirection:"row",
    marginLeft:'15%'},

  posicion_foto_resto:{
    flex:1, 
    flexDirection:"row",
    marginTop:'5%',
    marginBottom:'15%',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft:30,
    marginTop:-5,
  },

  card_caja: {
    width: 60,
    height: 80, 
    justifyContent: 'center',
  },
  
  card: {
    backgroundColor: '#482337',
    shadowColor: '#000',
    width: 180,
    elevation: 5,
    height: 80, 
    justifyContent: 'center',
    paddingLeft: 20,
  },
  cardDescription: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  line: {
    width: '150%',      
    backgroundColor: '#482337', 
    marginTop: 150,  
    alignSelf: 'center',
    marginRight:80,
  },

  input1: {
    height: 40,
    backgroundColor: 'white',
    marginTop:30,
    borderRadius: 20,
    borderColor: '#482337',
    fontSize: 16,
    borderRadius: 20,
    width:340,
    borderWidth: 4,  
    textAlign:'center',
    
  },

  linearGradient: {
    flex: 1,
  },

  totales:{
    marginTop:80,
  marginLeft:80, },
  
  totales_Texto:{
    fontWeight:'bold',
    fontSize:20,
    color:'green',
    paddingTop:20,

  }
 


});

export default App;