import React, { useRef, useState } from 'react';
import { SafeAreaView,ScrollView,StyleSheet, View,Button,Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {LinearGradient} from 'expo-linear-gradient';


const App = () => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 37.386365, //Puedes cambiar a la latitud del sitio que quieras buscar
    longitude: -6.028167, // Lo mismo que arriba pero con la longitud
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  /*Utilizo esto para que se me muestre un mapa y poder ir viendo los puntos de ventas que quiero*/

  const zoomIn = () => {
    setRegion(prev => ({
      ...prev,
      latitudeDelta: prev.latitudeDelta / 2,
      longitudeDelta: prev.longitudeDelta / 2,
    }));
  };

  const zoomOut = () => {
    setRegion(prev => ({
      ...prev,
      latitudeDelta: prev.latitudeDelta * 2,
      longitudeDelta: prev.longitudeDelta * 2,
    }));
  };

  return (

    <LinearGradient
    colors={['#8B6B97', '#89BECF', '#8B6B97']}
    style={styles.linearGradient}
  >

    <SafeAreaView style={styles.container}>

    <View style={styles.container}>
      <View>
      <Text style={styles.cardEncabezado}>{'Tiendas más cercana'}</Text>
      </View>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <Marker
          coordinate={{ latitude: 37.386365, longitude: -6.028167 }}
          title="Tienda Nerea"
          description="En ella podras encontrar todo tipo de Prendas"
        />

        <Marker
          coordinate={{ latitude: 37.376833, longitude: -6.028753 }}
          title="Tienda Hytasa"
          description="En ella podras encontrar todo tipo de Prendas"
        />
      </MapView>

      {/* Esto es para hacer zoom o alejar en el mapa*/}
      <View style={styles.zoomContainer}>
        
        <Button title="+" onPress={zoomIn} />
        <Button title="-" onPress={zoomOut} />
      </View>

      {/* Esto es para hacer scroll en las reseñas*/}

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>  

        <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{'Reseña 1'}</Text>
          <Image source={require('../../../assets/resenia5estrellas.png')} style={styles.cardImage} />
          <Text style={styles.cardsubTitle}>{'La pagina Web es muy aplicada ya que puedo ver todo tipo de contenido en ella'}</Text>
        </View>
        </View>

        <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{'Reseña 1'}</Text>
          <Image source={require('../../../assets/resenia5estrellas.png')} style={styles.cardImage} />
          <Text style={styles.cardsubTitle}>{'La pagina Web es muy aplicada ya que puedo ver todo tipo de contenido en ella'}</Text>
        </View>
        </View>

        <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{'Reseña 1'}</Text>
          <Image source={require('../../../assets/resenia5estrellas.png')} style={styles.cardImage} />
          <Text style={styles.cardsubTitle}>{'La pagina Web es muy aplicada ya que puedo ver todo tipo de contenido en ella'}</Text>
        </View>
        </View>

        <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{'Reseña 1'}</Text>
          <Image source={require('../../../assets/resenia5estrellas.png')} style={styles.cardImage} />
          <Text style={styles.cardsubTitle}>{'La pagina Web es muy aplicada ya que puedo ver todo tipo de contenido en ella'}</Text>
        </View>
        </View>
        </View>
      </ScrollView>
      
    </View>

    </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({

  linearGradient: {
    flex: 1,
  },
   scrollContainer: {
  },
  container: {
    flex: 1
  },
  map: {
    marginLeft:'15%',
    marginTop:'10%',
    width: '70%',
    height: '35%',
  },
  zoomContainer: {
    position: 'absolute',
    top: 200,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    padding: 10,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    width:400,
    elevation: 5,
    marginLeft:'5%',
    marginTop:'5%'
},

cardContent: {
  padding: 16,
  
},

cardTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  
},

cardsubTitle: {
  fontSize: 15,
  
},

cardImage: {
  width: '35%',
  height: 25,
},

cardEncabezado: {
  fontSize: 30,
  marginLeft:'15%',
  marginTop:'10%',
  fontWeight: 'bold',
  
},

});

export default App;
