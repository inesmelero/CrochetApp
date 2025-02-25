import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TextInput, Button, TouchableOpacity, View, Dropdown } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


export default function MenuPrincipal({ navigation }) {

    const handleLogin = () => {
      console.log('Botón de Iniciar sesión presionado');
      navigation.navigate('Calculadora de puntos');
  };

  const handlePatronesGratuitos = () => {
    console.log('Botón de Patrones Gratuitos presionado');
    navigation.navigate('Patrones Gratuitos'); 
};

const handlePatronesPago = () => {
    console.log('Botón de Patrones de Pago presionado');
    navigation.navigate('Patrones de Pago'); 
};


const handleCentroAsistencia = () => {
    console.log('Botón de Centro Asistencia presionado');
    navigation.navigate('Centro Asistencia'); 
}

const handlePuntosVenta = () => {
    console.log('Botón de Puntos de venta presionado');
    navigation.navigate('Puntos de Venta'); 
}

const handleComparteVende = () => {
    console.log('Botón de Comparte y Vende presionado');
    navigation.navigate('Comparte y Vende'); 
}; 

const handleMiPerfil = () => {
    console.log('Botón de mi Perfil presionado');
    navigation.navigate('Mi perfil'); 
};


    return (

        <LinearGradient
            colors={['#8B6B97', '#89BECF', '#8B6B97']}
            style={styles.linearGradient}
        >

            <SafeAreaView style={styles.container}>


                <Image style={styles.image_corazon} source={require('../../../assets/crochet-texture-colored-striped-knitted-600nw-2094387277.webp')} />

                <TextInput
                    style={styles.inputbusqueda}
                    placeholder="Buscar..."
                    />


                <TouchableOpacity style={styles.button_menu} onPress={handleLogin}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.image_iconos} source={require('../../../assets/calculadora.png')} />
                    </View>
                    <Text style={styles.texto_calculadora}>CALCULADORA DE PUNTOS</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button_menu} onPress={handlePatronesGratuitos}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.image_iconos} source={require('../../../assets/patrongratis.png')} />
                    </View>
                   <Text style={styles.texto_calculadora}>PATRONES GRATUITOS</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button_menu} onPress={handlePatronesPago}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.image_iconos} source={require('../../../assets/patronpago.png')} />
                    </View>
                   <Text style={styles.texto_calculadora}>PATRONES DE PAGO</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button_menu} onPress={handleCentroAsistencia}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.image_iconos} source={require('../../../assets/ayuda.png')} />
                    </View>
                   <Text style={styles.texto_calculadora}>CENTRO ASISTENCIA</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button_menu} onPress={handlePuntosVenta}>  
                    <View style={styles.iconContainer}>
                        <Image style={styles.image_iconos} source={require('../../../assets/map.png')} />
                    </View>
                   <Text style={styles.texto_calculadora}>PUNTOS DE VENTA</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button_menu} onPress={handleComparteVende}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.image_iconos} source={require('../../../assets/venta.png')} />
                    </View>
                   <Text style={styles.texto_calculadora}>COMPARTE Y VENDE</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button_menu} onPress={handleMiPerfil}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.image_perfil} source={require('../../../assets/iconoperfil.png')} />
                    </View>
                   <Text style={styles.texto_calculadora}>MI PERFIL</Text>
                </TouchableOpacity>

            </SafeAreaView>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({


    linearGradient: {
        flex: 1,
    },

    container: {
        alignItems: 'center',
        marginTop: 35,
    },

    image: {
        width: 70,
        height: 70,
        borderColor: '#482337',
        borderRadius: 200,
        marginLeft: 300,
        marginBottom: 7,
        borderWidth: 3,
    },

    image_corazon: {
        width: 450,
        height: 200,
        borderWidth: 5,
        borderColor: '#482337',
        marginBottom: 20,
    },

    inputbusqueda:{
      height: 50,
      backgroundColor: 'white',
      fontSize: 16,
      width:410,  
      textAlign:'center',
    },

    texto_calculadora:{
        color: '#482337',
        fontSize:11,
        color:'white',
        textAlign:'center',
        fontWeight: 'bold',
    },

    button_menu:{
        backgroundColor: '#482337',
        marginTop: 20,
        padding: 15,  
        borderRadius: 8,
        width: 180,   
        height: 50,   
        justifyContent: 'center', 
        alignItems: 'center',      
        marginLeft:150,
    },

    image_iconos:{
        width: 60,
        height: 60,
        marginRight:200,
    
    },

    image_perfil:{
        width: 55,
        height: 55,
        marginTop:10,
        marginRight:200,
        borderRadius:100,
    },

    iconContainer: {
        position: 'absolute',
        right:40,
        top:-10,},


     

})