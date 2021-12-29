import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { fontFamilyLight, fontFamilyRegular, fontFamilySemiBold, fontSizeMedium, fontSizeSmall, fontSizeXSmall, lighterGray, lightGray } from '../../../../styles/styles'
import { toReal } from '../../../../utils/moeda'

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  containerImagem: {
    flex: 20, 
    backgroundColor: '#F7F8FC',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 40,
    height: 50,
  },
  containerDesc: {
    flex: 45,
    padding: 18,
    justifyContent: 'center',
  },
  itemName: {
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeMedium,
    color: '#000',
  },
  titulo: {
    fontFamily: fontFamilyLight,
    fontSize: fontSizeSmall,
    color: '#000',
  },
  containerPreco: {
    flex: 35,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  quantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: fontSizeXSmall,
    fontFamily: fontFamilySemiBold,
    color: '#000',
  },
  preco: {
    fontFamily: fontFamilyRegular,
    color: '#000',
  }
})