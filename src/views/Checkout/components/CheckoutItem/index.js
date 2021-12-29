import React from 'react'
import { View, Text, Image } from 'react-native'
import { toReal } from '../../../../utils/moeda'
import styles from './styles'

export function CheckoutItem({item}){
  const { titulo, imagem, itemName, preco, quantidade } = { ...item }

  return (
    <View style={styles.container}>
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
    </View>
  )
}

