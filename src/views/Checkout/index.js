import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DataContext } from '../../provider'
import { blue, fontFamilyBold, fontFamilySemiBold, fontSizeLarge, fontSizeSmall, fontSizeXXLarge } from '../../styles/styles'
import Botao from '../../components/Botao'
import { toReal } from '../../utils/moeda'
import { CheckoutItem } from './components/CheckoutItem'
import { useNavigation } from '@react-navigation/native'

export default function Checkout(){
  const navigation = useNavigation()
  const {itensCheckout} = useContext(DataContext)
  const valorTotal = itensCheckout.reduce(
    (acum, atual) => acum + (atual.preco * atual.quantidade), 0
  ).toFixed(2)

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Checkout</Text>
      {itensCheckout.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}
      <Text style={styles.total}>
        {toReal(valorTotal)}
      </Text>
      <Botao titulo='Finalizar Compra'/>
      <TouchableOpacity onPress={() => navigation.push('ListaProdutos')}>
        <Text style={styles.textoContinuar}>Continuar Comprando</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titulo: {
    fontFamily: fontFamilySemiBold,
    fontSize: fontSizeXXLarge,
    color: '#000',
    marginBottom: 10,
  },
  total: {
    fontFamily: fontFamilySemiBold,
    fontSize: fontSizeLarge,
    color: '#000',
    marginVertical: 36,
  },
  textoContinuar: {
    fontFamily: fontFamilyBold,
    fontSize: fontSizeSmall,
    color: blue,
    padding: 20,
    textAlign: 'center',
  }
})