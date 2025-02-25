import { ScrollView,StyleSheet, Text, SafeAreaView, Image, TextInput, Button, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useContext } from 'react';

function App({ navigation }) {
  const [searchText, setSearchText] = useState('');

  return (
    <LinearGradient
    colors={['#8B6B97', '#89BECF', '#8B6B97']}
    style={styles.linearGradient}
  >
 
    
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
    <Image source={require('../../../assets/ayuda.png')} style={styles.imagenayuda} />

      <View style={styles.searchContainer}>

  
        <Image source={require('../../../assets/lupa.jpg')} style={styles.iconlupa} />

        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          placeholderTextColor="#fff"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />

      </View>
      <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{'¿Pregunta 1?'}</Text>
        <Text style={styles.cardDescription}>{'Respuesta 1. Hola a todos.'}</Text>
        <Image source={require('../../../assets/persona1.png')} style={[styles.iconpersona1]} />
      </View>
      </View>

      <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{'¿Pregunta 2?'}</Text>
        <Text style={styles.cardDescription}>{'Respuesta 2. Hola a todos.'}</Text>
        <Image source={require('../../../assets/persona2.png')} style={[styles.iconpersona1]} />
      </View>
      </View>

      <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{'¿Pregunta 3?'}</Text>
        <Text style={styles.cardDescription}>{'Respuesta 3. Hola a todos.'}</Text>
        <Image source={require('../../../assets/persona3.png')} style={[styles.iconpersona1]} />
      </View>
      </View>

      <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{'¿Pregunta 4?'}</Text>
        <Text style={styles.cardDescription}>{'Respuesta 4. Hola a todos.'}</Text>
        <Image source={require('../../../assets/persona4.png')} style={[styles.iconpersona1]} />
      </View>
      </View>

      <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{'¿Pregunta 5?'}</Text>
        <Text style={styles.cardDescription}>{'Respuesta 5. Hola a todos.'}</Text>
        <Image source={require('../../../assets/persona5.jpg')} style={[styles.iconpersona1]} />
      </View>
      </View>

      <Button
        title="Volver"
        onPress={() => {
          navigation.navigate('Menu Principal');
        }}
      />
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    width:350,
    elevation: 5,
    margin: 12,
    height:150
},
cardTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  
},
cardDescription:  
{
    fontSize: 14,
},
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#DEA5A4',
    borderColor: '#482337',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 15,
    marginTop:20,
    },

  iconlupa: {
    width: 20,
    height: 20,
    marginRight: 10,
    },

  input: {
    flex: 1, 
    height: 40,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },

  imagenayuda: {
    width: 60,
    height: 60,
    marginRight:350,
  },

  iconpersona1:{
    width: 100,
    height: 100,
    borderRadius:100,
    marginLeft:250,
  },
  linearGradient: {
    flex: 1,
  },

});

export default App;