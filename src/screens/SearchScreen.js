import * as React from 'react';
import { Searchbar, List } from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export function SearchScreen() {

    {/**
        Arreglo orignal del con todos los lenguajes pedidos
     */}
    var oItems = ["Android", "C++", "Java", "JavaScript", "Kotlin", "PHP", "Swift"];

    {/**
        Hook para el input de la búsqueda
    */}

    const [searchQuery, setSearchQuery] = React.useState('');


    {
        /**
         * Copia de los elementos originales al array temporal en el hook correspondiente.
         */
    }
    const [items, newItems] = React.useState([...oItems]);

  
    {
        /**
         * Método a realizar cuando se escrioba en la barra de búsqueda
         */
    }
    const onChangeSearch = query => {
        setSearchQuery(query);
        /**
         * Cúando el input de búßqueda esta vacío, se vuelven a copiar los elementos originales del arreglo.
         * 
         * Si hay texto escrito, este se compara con el texto de los elementos del array original para saber cual
         * colocar en el array que se despliega, de esta forma cuando hay dos elementos que empatan por dos o más
         * letras y una e estas se elimina, se puede visulizar los elementos que previeamente habíán sido descartados.
         */
        if(query == "" || query == " ")
        {
            newItems([...oItems]);
        }
        else
        {
            var PATT = query;
            var tempItems = oItems.filter(function (str) { return str.includes(PATT); });
            newItems([...tempItems]);
        }

    };
    

    {/*Código de la pantalla de búsqueda.*/}
    return (
      <>
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />

        <View>
            {  /*En este mapa se crean los elementos asociados a Items, cada elemento produce un List Item que se despliega en la lista.*/
                items.map((item,key)=>(
                    <List.Item
                        key = {key}
                        title = {item}  
                        left={props => <Icon name="code" size= {30} color='#826ed2' />}
                    />
                ))
            
            }
        </View>

      </>
    );
};