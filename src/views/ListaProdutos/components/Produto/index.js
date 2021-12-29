import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { gray, fontSizeSmall } from '../../../../styles/styles'

export default function Produto({produto}){
  const navigation = useNavigation()

  return (
    <TouchableOpacity 
      style={styles.containerItem}
      onPress={() => navigation.push('DetalhesProduto', {produto})}
    >
      <Image source={produto.imagem} style={styles.imagem} resizeMode='contain'/>
      <Text style={styles.texto}>{produto.titulo}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    height: 168,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  imagem: {
    height: 80,
  },
  texto: {
    marginTop: 8,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: fontSizeSmall,
    color: gray,
  }
})