import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



export default function Calculadora({ navigation }) {
  const [ancho, setAncho] = useState(''); 
  const [largo, setLargo] = useState(''); 
  const [resultado, setResultado] = useState(''); 
  const [operador, setOperador] = useState(''); 


  const agregarEntrada = (value) => {
    
    if (ancho.length <= largo.length) {
      setAncho((prevAncho) => prevAncho + value);
    } else {
      setLargo((prevLargo) => prevLargo + value);
    }
  };

  /*Función para limpiar las entradas*/
  const limpiar = () => {
    setAncho('');
    setLargo('');
    setResultado('');
    setOperador('');
  };

  /*Función para calcular el resultado basado en el operador*/
  const calcular = () => {
    const anchoNum = parseFloat(ancho);
    const largoNum = parseFloat(largo);

    /*Si alguno de los dos es nulo, te da un error*/
    if (isNaN(anchoNum) || isNaN(largoNum)) {
      Alert.alert('Error', 'Por favor, ingresa valores válidos para ancho y largo.');
      return;
    }

    let total;

    switch (operador) {
      case '+':
        total = anchoNum + largoNum;
        break;
      case '-':
        total = anchoNum - largoNum;
        break;
      case '*':
        total = anchoNum * largoNum;
        break;
      case '/':
        if (largoNum === 0) {
          Alert.alert('Error', 'No se puede dividir entre cero.');
          return;
        }
        total = anchoNum / largoNum;
        break;
      default:
        Alert.alert('Error', 'Selecciona un operador.');
        return;
    }

    setResultado(`Resultado: ${total}`);
  };

  return (
    
    <LinearGradient
      colors={['#8B6B97', '#89BECF', '#8B6B97']}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_titulo}>Calculadora de Puntos</Text>
        </View>

        <View style={styles.display}>
          <Text style={styles.label}>Ancho:</Text>
          <TextInput
            style={styles.input}
            value={ancho}
            editable={false} // No permite editar manualmente
          />
          <Text style={styles.label}>Largo:</Text>
          <TextInput
            style={styles.input}
            value={largo}
            editable={false} // No permite editar manualmente
          />
          <Text style={styles.resultado}>{resultado}</Text>
        </View>

        <View style={styles.buttonContainer}>
          {[
            ['7', '8', '9'],
            ['4', '5', '6'],
            ['1', '2', '3'],
            ['C','0', '='],
            ['+', '-','*', '/']
          ].map((row, index) => (
            <View key={index} style={styles.row}>
              {row.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.button}
                  onPress={() => {
                    if (item === 'C') {
                      limpiar();
                    } else if (item === '=') {
                      calcular();
                    } else if (['+', '-', '*', '/'].includes(item)) {
                      setOperador(item); /*Para elegir el operador deseado*/
                    } else {
                      agregarEntrada(item);
                    }
                  }}
                >
                  <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.volverButton} onPress={() => navigation.navigate("Menu Principal")}>
          <Text style={styles.volverButtonText}>Volver</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  linearGradient: {
    flex: 1,
  },
  header: {
    marginBottom: 20,
  },
  text_titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#482337',
  },
  display: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    color: '#482337',
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#DEA5A4',
    borderRadius: 10,
    borderColor: '#482337',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center', 
    color:'white',
    fontWeight:'bold',
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#482337',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: '#89BECF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    elevation: 3,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight:'bold',
  },
  volverButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#8B6B97',
    borderRadius: 10,
    elevation: 3,
    width: '90%',
    alignItems: 'center',
  },
  volverButtonText: {
    color: 'white',
    fontWeight:'bold',
    fontSize: 18,
  },
});
