import React from 'react';
import { View,Text, Image,StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CrearCuentaScreen({ navigation }) {

  const hanlebotonsalir = () => {
    console.log('Botón de salir sesión presionado');
    navigation.navigate('Login');
};


    return(

        <LinearGradient
        colors={['#8B6B97', '#89BECF', '#8B6B97']}
        style={styles.linearGradient}
      >
        <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.text_titulo}>Crea tu cuenta</Text>
        </View>
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
        <Image source={require('../../../assets/contraseña.png')} style={styles.pluma} />
        </View>
        <TextInput
          style={styles.input1}
          placeholder="Confirmar contraseña"
          />
      </View>

    
     <TouchableOpacity style={styles.boton_crear}>

          <Text style={styles.textoboton}>Crear</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.boton_salir} onPress={hanlebotonsalir}>

          <Text style={styles.textoboton}>Salir</Text>
       </TouchableOpacity>

        </SafeAreaView>
        </LinearGradient>);
}

const styles = StyleSheet.create({
    text_titulo:{
        color: '#482337',
        fontSize:45,
        fontWeight: 'bold',
        marginLeft:'15%'
      },
    linearGradient: {
        flex: 1,
      },

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


  boton_crear:{
    marginTop:40,
    backgroundColor: '#482337',
    width:150,
    height:40,
    borderRadius:20,
    marginLeft:'40%',
    justifyContent:'center',
  },

  boton_salir:{
    marginTop:40,
    backgroundColor: 'red',
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
})