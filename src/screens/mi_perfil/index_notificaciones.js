import {TouchableOpacity,StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
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
          <Text style={styles.cardDescription}>{'NOTIFICACIONES'}</Text>
        </View>
        <Image source={require('../../../assets/persona1.png')} style={styles.image} />
      </View>
     
      <View style={styles.line} /> 

      <TouchableOpacity style={styles.boton1}>

        <Text style={styles.textoboton}>ACTIVAR</Text>

      </TouchableOpacity>

      
      <TouchableOpacity style={styles.boton2}>

        <Text style={styles.textoboton}>DESACTIVAR</Text>

      </TouchableOpacity>

  

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
    height: 3,      
    backgroundColor: '#482337', 
    marginTop: 150,     
    alignSelf: 'center',
    marginRight:80,
  },

 

  linearGradient: {
    flex: 1,
  },

  
  boton1:{
    marginTop:100,
    backgroundColor: 'green',
    width:250,
    height:40,
    borderRadius:20,
    marginLeft:'25%',
    justifyContent:'center',
    marginBottom:80,
  },

  boton2:{
    marginTop:20,
    backgroundColor: 'red',
    width:250,
    height:40,
    borderRadius:20,
    marginLeft:'25%',
    justifyContent:'center',
  },

  textoboton:{
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    fontSize:18,
  }
 


});

export default App;