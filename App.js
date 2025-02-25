
/*He utilizado el drawer porque necesito navegar entre pantallas y un menu latral*/

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet,SafeAreaView, StatusBar } from 'react-native';

import Main from './src/screens/main/index.js'; // Pantalla Menú Principal
import MenuPrincipal from './src/screens/MenuPrincipal/index.js'; // Pantalla Menú Principal
import Calculadora_puntos from './src/screens/Calculadora_puntos/index.js'; // Pantalla Calculadora
import PatronesGratuitos from './src/screens/patrones_gratuitos/index.js'; // Pantalla patrones gratuitos
import Patrones_pago from './src/screens/patrones_pago/index.js'; // Pantalla patrones de pago
import Centro_Asistencia from './src/screens/centro_asistencia/index.js'; // Pantalla centro asistencia
import Puntos_Venta from './src/screens/puntos_venta/index.js'; // Pantalla puntos de venta
import Comparte_Vende from './src/screens/comparte_vende/index.js'; // Pantalla comparte y vende
import Mi_Perfil from './src/screens/mi_perfil/index.js'; // Pantalla perfil
import OlvidarContraseña from './src/screens/Olvidar_contraseña/index.js'; // Pantalla perfil
import CrearCuenta from './src/screens/crearCuenta/index.js'; // Pantalla perfil

//En el app.js lo unico que hago es el menu lateral (drawer) y  la navegacion por pantallas la hago con el navigation 
//en cada pantalla de mi aplicacion, hay algunas en las que no mostrare el menu como es en el login, menu principal, olvidar contraseña...

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Main} options={{drawerItemStyle: { display: 'none' }, headerShown: false}} />
      <Drawer.Screen name="Menu Principal" component={MenuPrincipal} options={{drawerItemStyle: { display: 'none' }, headerShown: false}} />
      <Drawer.Screen name="Olvidar Contraseña" component={OlvidarContraseña} options={{drawerItemStyle: { display: 'none' }, headerShown: false}} />
      <Drawer.Screen name="Crear cuenta" component={CrearCuenta} options={{drawerItemStyle: { display: 'none' }, headerShown: false}} />
      <Drawer.Screen name="Calculadora de puntos" component={Calculadora_puntos} />
      <Drawer.Screen name="Patrones Gratuitos" component={PatronesGratuitos} />
      <Drawer.Screen name="Patrones de Pago" component={Patrones_pago} />
      <Drawer.Screen name="Centro Asistencia" component={Centro_Asistencia} />
      <Drawer.Screen name="Puntos de Venta" component={Puntos_Venta} />
      <Drawer.Screen name="Comparte y Vende" component={Comparte_Vende} />
      <Drawer.Screen name="Mi perfil" component={Mi_Perfil} />

    </Drawer.Navigator>     
    </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})

export default App