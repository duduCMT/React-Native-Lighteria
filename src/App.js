import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { backgroundColor } from './styles/styles'
import ListaProdutos from './views/ListaProdutos'
import DetalhesProduto from './views/DetalhesProduto'
import Provider from './provider'
import Checkout from './views/Checkout'

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Provider>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="ListaProdutos">
            <Stack.Screen 
              name='ListaProdutos' 
              component={ListaProdutos}
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name='DetalhesProduto' 
              component={DetalhesProduto}
              options={{
                headerShown: false,
                animation: 'slide_from_right'
              }}
            />
            <Stack.Screen 
              name='Checkout' 
              component={Checkout}
              options={{
                headerShown: false,
                animation: 'slide_from_bottom'
              }}
            />
          </Stack.Navigator> 
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: backgroundColor
  },
})