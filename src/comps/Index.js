import { React } from "react";
import { NavigatorContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default () =>(
  <NavigatorContainer>
    <AuthStack.Navigator>

    </AuthStack.Navigator>
  </NavigatorContainer>

);
