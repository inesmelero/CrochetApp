import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ResetPasswordScreen({ navigation }) {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      Alert.alert("Contraseña actualizada", "Tu contraseña ha sido cambiada exitosamente.");
      navigation.navigate('Login');
    } else {
      Alert.alert("Error", "Las contraseñas no coinciden.");
    }
  };

  return (
    <LinearGradient
      colors={['#8B6B97', '#89BECF', '#8B6B97']}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Restablecer Contraseña</Text>
        
        {/* Input para Nueva Contraseña */}
        <TextInput
          style={styles.input}
          placeholder="Nueva Contraseña"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        {/* Input para Confirmar Contraseña */}
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Botón para cambiar contraseña */}
        <TouchableOpacity style={styles.cajabotoncambiarcontra} onPress={handleChangePassword}>
          <Text style={styles.botoncambiarcontra}>Cambiar Contraseña</Text>
        </TouchableOpacity>

        {/* Botón para regresar al login */}
        <TouchableOpacity onPress={() => { navigation.navigate('Login'); }}>
          <Text style={styles.botonvolver}>VOLVER AL INICIO</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#482337',
  },
  linearGradient: {
    flex: 1,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#482337',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  cajabotoncambiarcontra: {
    backgroundColor: '#482337',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  botoncambiarcontra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  botonvolver: {
    fontSize: 18,
    color: '#482337',
    marginTop: 20,
  },
});
