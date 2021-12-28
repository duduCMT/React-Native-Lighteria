import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import ListaProdutos from './views/ListaProdutos'

export default function App(){
  return (
    <SafeAreaView style={styles.container}>
      <ListaProdutos />  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F4F0F4'
  },
})