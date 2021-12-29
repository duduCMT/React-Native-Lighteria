import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Background from './components/Background'
import DescricaoItem from './components/DescricaoItem'

export default function DetalhesProduto({route}){
  const produto = route.params.produto
  return(
    <View style={styles.container}>
      <Background />
      <DescricaoItem produto={produto} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})