import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import { NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

// screens
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'

export type RootStackPramList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
}

const Stack = createNativeStackNavigator<RootStackPramList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Login'>
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login details"
        }}
        />
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home"
        }}
        />
        <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Signup details"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
  }
});

export default App
