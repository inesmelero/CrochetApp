import {TouchableOpacity,StyleSheet, Text, SafeAreaView, View, Image, TextInput} from 'react-native';
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
          <Text style={styles.cardDescription}>{'DATOS PERSONALES'}</Text>
        </View>
        <Image source={require('../../../assets/persona1.png')} style={styles.image} />
      </View>
     
      <View style={styles.line} /> 
      
      <View style={styles.posicion_foto_resto}>
        <View style={styles.card_imagen_pluma}>
        <Image source={require('../../../assets/pluma.png')} style={styles.pluma} />
        </View>
        <TextInput
          style={styles.input1}
          placeholder="Nombre usuario"
          />
      </View>

      <View style={styles.posicion_foto_resto}>
        <View style={styles.card_imagen_pluma}>
        <Image source={require('../../../assets/carta.png')} style={styles.pluma} />
        </View>
        <TextInput
          style={styles.input1}
          placeholder="Correo electrónico"
          />
      </View>

      <View style={styles.posicion_foto_resto}>
        <View style={styles.card_imagen_pluma}>
        <Image source={require('../../../assets/contraseña.png')} style={styles.pluma} />
        </View>
        <TextInput
          style={styles.input1}
          placeholder="Contraseña"
          />
      </View>

      <View style={styles.posicion_foto_resto}>
        <View style={styles.card_imagen_pluma}>
        <Image source={require('../../../assets/datosbanco.png')} style={styles.pluma} />
        </View>
        <TextInput
          style={styles.input1}
          placeholder="Datos bancarios"
          />
      </View>

    
     <TouchableOpacity style={styles.boton}>

          <Text style={styles.textoboton}>Actualizar datos</Text>
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
    marginLeft:'5%',
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

  card_imagen_pluma: {
    width: 60,
    height: 80, 
    justifyContent: 'center',
    marginRight:10,
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

  boton:{
    marginTop:20,
    backgroundColor: '#482337',
    width:150,
    height:40,
    borderRadius:20,
    marginLeft:'40%',
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