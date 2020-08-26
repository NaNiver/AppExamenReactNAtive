import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { HomeScreen} from './src/screens/HomeScreen';
import { SearchScreen} from './src/screens/SearchScreen';




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

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

        tabBarOptions={{
          activeTintColor: '#826ed2',
          inactiveTintColor: '#b4a8e4',
        }}
      
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}