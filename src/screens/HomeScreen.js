import React, { useState } from "react";
import { Button, Text, StyleSheet, StatusBar, View } from "react-native";
import { Appbar } from 'react-native-paper';


export function HomeScreen() {
  const styleTypes = ['default'];
  const [visibleStatusBar, setVisibleStatusBar] = useState(true); /*Hook para saber si es necesario cambiar el estado de la barra.*/
  const [styleStatusBar] = useState(styleTypes[0]);

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };

  return (
    <>
      <Appbar.Header style={{backgroundColor:'#E2EDF6'}}>
    
       <Appbar.Content title="Roberto Ignacio Zapata Govea"/>
    
      </Appbar.Header>
      <View style={styles.container}>
     
      <StatusBar backgroundColor="grey" barStyle={styleStatusBar} />
        
        <View>
          
          <StatusBar hidden={visibleStatusBar} />
        </View>
      
      {/**Hacer esto con los Hooks es lo que aprendí en el curso, no obstante, utlilize varias cosas en las otras dos 
       * pantallas que venían y otras que yo búsque, como el uso de tabs y o la inclusión de Iconos.**/}
      <View style={styles.buttonContainer}>
        <Button title="Modificar barra de estado" onPress={() => changeVisibilityStatusBar()} color="black"/>
      </View>

      </View>
    </>
  );
};


/*Stilo del botón*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ECF0F1',
    padding: 8
  },
  buttonContainer:{
    padding: 10
  },
  textStyle:{
    textAlign: 'center'
  }
});