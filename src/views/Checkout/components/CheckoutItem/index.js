import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { toReal } from '../../../../utils/moeda'
import styles from './styles'

export function CheckoutItem({item}){
  const navigation = useNavigation()
  const { titulo, imagem, itemName, preco, quantidade } = { ...item }

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => { navigation.push('DetalhesProduto', {produto: item}) }}
    >
      <View style={styles.containerImagem}>
        <Image source={imagem} style={styles.imagem}/>
      </View>
      <View style={styles.containerDesc}>
        <Text style={styles.itemName}>{itemName}</Text>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>
      <View style={styles.containerPreco}>
        <Text style={styles.preco}>{toReal(preco * quantidade)}</Text>
        <Text style={styles.quantidade}>Qtd: {quantidade}</Text>
      </View>
    </TouchableOpacity>
  )
}

