import React, { useState } from 'react';
import { View, Dimensions, FlatList, StyleSheet, Text } from 'react-native';
import Screen1 from '../../screens/mi_perfil/index_datospersonales.js';
import Screen2 from '../../screens/mi_perfil/index_historialventa.js';
import Screen3 from '../../screens/mi_perfil/index_notificaciones.js';
import Screen4 from '../../screens/mi_perfil/index_patronesguardados.js';


//Este index lo he creado para hacer una lista de mis pantallas de mi perfil

// Obtiene el ancho de la pantalla del dispositivo
const { width: screenWidth } = Dimensions.get('window');


// Array de componentes de las pantallas
const screens = [
  { id: '1', component: <Screen1 /> },
  { id: '2', component: <Screen2 /> },
  { id: '3', component: <Screen3 /> },
  { id: '4', component: <Screen4 /> },
];

export default function App() {

  // Declara el estado `activeIndex`, que controla el índice de la pantalla actualmente activa

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    //esto es como el scroll pero en horizontal, lo he buscado en la documentacion de react tal y como hay que ponerlo
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveIndex(slideIndex);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={screens} // Cojo del array los datoa

        //Le digo que cada pantalla de mi array ocupe el 100% de la misma

        renderItem={({ item }) => (
          <View style={{ width: screenWidth, height: '100%' }}>{item.component}</View>
        )}

        keyExtractor={(item) => item.id} // Establece `id` como clave única para cada pantalla

        horizontal //Aqui defino que el desplazamiento entre pantallas quiero que sea horizontal

        pagingEnabled //para que salte directamente a la siguiente pantalla

        showsHorizontalScrollIndicator={false} //por si quiero ocultar los puntitos del desplazamiento horizontal, en este caso si los quiero mostrar, por eso pongo false
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      
      {/* Contenedor de puntos de paginación */}
      <View style={styles.paginationContainer}>
        {screens.map((_, index) => (
           // Para ponerle un punto para cada pantalla 
          <View
            key={index}
            style={[
            //Si estoy en una pantalla concreta significara que el color del punto sera mas llamativo porque esta en activo, sino cambia la opacidad del color
              styles.dot,
              { opacity: activeIndex === index ? 1 : 0.3, backgroundColor: activeIndex === index ? '#333' : '#bbb' },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
});