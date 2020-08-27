import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { HomeScreen } from './src/screens/HomeScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';

{/*La pantalla principal solo contiene las tabs para hacer referencía a las otras pantallas creadas, estan dentro de la carpeta "screens" del directorio "src"*/}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>


      {/*Declaración de las Tabs para la navegación con sus respectivos iconos.*/}
      <Tab.Navigator 

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            {/*Dependiendo de la pantalla que esta contenida se le asigna el icono correspondiente, el único icono que cambia es el de la pantalla de perfil*/}
            switch(route.name)
            {
              case 'Home':
                    iconName = 'home';
              break;

              case 'Search': 
                    iconName = 'search';
              break;

              case 'Profile':
                    iconName = focused ? 'user-circle': 'user-circle-o';
              break;
            }



            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}

        

        tabBarOptions={{ /*Colores de las tabs inferiores.*/
          activeTintColor: '#826ed2',
          inactiveTintColor: '#b4a8e4',
        }}
      
      >

        {/*Asignación de las pantallas con sus respectivos "apodos" para las tabs.*/}

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}