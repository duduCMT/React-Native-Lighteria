import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

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

