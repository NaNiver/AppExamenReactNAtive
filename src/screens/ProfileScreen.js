import * as React from 'react';
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { Avatar, Checkbox, TextInput, Switch} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


/*Estilo de las filas de la lista*/

const rowStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'baseline',
  },
});

/*Estilo del Texto en la lista.*/

const textStyle = StyleSheet.create(
  {
    text: {
      fontSize: 20,
      marginLeft: '17%',

    }
  }

)
/*Estilo del texto entre el nombre y el Switch*/
const textDisable = StyleSheet.create({
  text:{
    color: 'lightsteelblue',
    fontSize: 12,
  }

})

/*Estilo del Icono de Avatar*/

const avatarStyle = StyleSheet.create({
    container: {
 
      justifyContent: 'center',
      marginTop:'40%',
      backgroundColor: 'whitesmoke',
      alignSelf: 'center',

    },
});
 
/*Estilo para crear el espacio gris*/

const fontStyle = StyleSheet.create({
    container: {
 
      justifyContent: 'space-evenly',
      height: '35%' ,
      width: '100%' ,
      backgroundColor: 'lightslategrey',
      flexDirection: 'column',
      position: 'absolute',


    },
  });

export function ProfileScreen() {
    const [notChecked, setChecked] = React.useState(false); /*Hook para el elemento sin seleccionar*/
    const [checked, alreadyCheck] = React.useState(true); /*Hook para los elementos seleccionados*/

    /*React.useState es que colocó los checkbox como seleccionados por defauit*/

    /**
     * Se que cada label debería de tener su propio hook, sin embargo, lo hice así solo como demostrativo.
     * Idealmente aquí deberíán de existir 6 hooks para los elementos de la lista.
     */

    const [isSwitchOn, setIsSwitchOn] = React.useState(true); /*Hook del switch*/

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
      <SafeAreaView> 
        <ScrollView>
            <View style={{ /*Container principal de la primera parte*/
                    flex: 1,
                    flexDirection: 'column',
                    position: 'relative',
                    alignItems: 'center',
                    alignContent: 'center',
                    backgroundColor: 'white',
                    height: '35%' ,
                }}
            >
                <SafeAreaView style = { fontStyle.container }>
                {/*Este View Es usado solo para que se renderice el color como en el ejemplo.*/}
                </SafeAreaView>

                {/*Icono del avatar.*/}
                <Avatar.Icon size={100} icon="account" color = { fontStyle.container.backgroundColor } style= {avatarStyle.container} />
               
                {
                  /**
                   * Area de texto plano y switch
                   */
                }

                  <Text style = {{
                    fontSize: 27,
                    fontWeight: 'bold',
                  }}>
                    {"Ignacio Zapata"}
                  </Text>
                  
                  <Text style = {textDisable.text}>
                    {'San Luis Potosí'}
                  </Text>

                  <Text style = {textDisable.text}>
                    {'"El mundo de es de los locos que se atreven a vivirlo"'}
                  </Text>

                  <Text style = {textDisable.text}>
                    {'Mi color favorito es el ázul'}
                  </Text>

                  <Text style = {textDisable.text}>
                    {'Mis cosa favorita es la computadora.'}
                  </Text>

                  <View style = { rowStyle.container }>
                    <Text
                      style = {{
                        marginLeft : '2%',
                        fontSize : 10
                      }}
                    >
                      {"Ver Series (Sitcoms, anime, fantasía, drama, etc)"}
                    </Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color = "dimgrey" />
                  </View>

               {
                 /**
                  * Esta sección esta apartada para la lista.
                  */
               }
               <View style={{
                 alignSelf: 'baseline',
               }} >

                {/** 
                 * Aquí empiezan las opciones de la lista.
                 * 
                 * Cada elemento esta compuesto por el checkbox y el texto
                 * que lo acompaña en cada linea.
                 * */ 
                }

                <View style = { rowStyle.container }>
                  <Checkbox
                    color = 'slategray'
                    status={notChecked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked(!notChecked);
                    }}
                  />
                  <Text style = {textStyle.text}>
                    {"Deportes"}
                  </Text>
                </View>

                <View style = { rowStyle.container }>
                  <Checkbox
                    color = 'slategray'
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      alreadyCheck(!checked);
                    }}
                  />
                  <Text style = {textStyle.text}>
                    {"Videojuegos"}
                  </Text>
                </View>

                <View style = { rowStyle.container }>
                  <Checkbox
                    color = 'slategray'
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      alreadyCheck(!checked);
                    }}
                  />
                  <Text style = {textStyle.text}>
                    {"Música"}
                  </Text>
                </View>

                <View style = { rowStyle.container }>
                  <Checkbox
                    color = 'slategray'
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      alreadyCheck(!checked);
                    }}
                  />
                  <Text style = {textStyle.text}>
                    {"Cocinar"}
                  </Text>
                </View>

                <View style = { rowStyle.container }>
                  <Checkbox
                    color = 'slategray'
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      alreadyCheck(!checked);
                    }}
                  />
                  <Text style = {textStyle.text}>
                    {"Tecnología"}
                  </Text>
                </View>

                <View style = { rowStyle.container }>
                  <Checkbox
                    color = 'slategray'
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      alreadyCheck(!checked);
                    }}
                  />
                  <Text style = {textStyle.text}>
                    {"Idiomas"}
                  </Text>
                </View>
                {
                  /**
                   * Aquí termina la lista
                   */
                }
                <View>
                  {/*TextInput con lo que les quiero compartir.*/}
                  <TextInput
                    value={'Participé en el desarrollo de la app "DonaVida" para el hospital central en el área de uncopediatría, la realice con el framework "Flutter, tengo mas o menos un año de experiencía trabajando con aplicaciones móviles.".'}
                    label = {"0/120"}
                    multiline = {true}
                    style ={{
                      marginLeft: '2%',
                      marginRight: '2%',
                      backgroundColor: 'white',
                    }}
                  />
                </View>

              </View>
            </View>

        </ScrollView>
      </SafeAreaView>
    );
};
