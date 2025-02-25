import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//Utilizo el flatlist para hacer una lista de los patrones guardados

// Ejemplo de datos de patrones guardados
const savedPatterns = [
  { id: '1', title: 'Gorro', description: 'Sin dificultad', image: require('../../../assets/gorro.jpg') },
  { id: '2', title: 'Manta calada', description: 'Dificultad media', image: require('../../../assets/manta.jpg') },
  { id: '3', title: 'Zapatos bebé', description: 'Dificultad media', image: require('../../../assets/pies.jpg') },
];

function PatternCard({ pattern }) {
  return (
    <View style={styles.card}>
      <Image source={pattern.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{pattern.title}</Text>
        <Text style={styles.cardDescription}>{pattern.description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <LinearGradient colors={['#8B6B97', '#89BECF', '#8B6B97']} style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Patrones Guardados</Text>
        <FlatList
          data={savedPatterns}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PatternCard pattern={item} />}
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#482337',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 16,
  },
  linearGradient: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
