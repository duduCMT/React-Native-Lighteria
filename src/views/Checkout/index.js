import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Botao from '../../components/Botao'
import styles from './styles'

import { DataContext } from '../../provider'
import { toReal } from '../../utils/moeda'
import { CheckoutItem } from './components/CheckoutItem'
import SacolaVazia from './components/SacolaVazia'

export default function Checkout() {
  const navigation = useNavigation()
  const { itensCheckout } = useContext(DataContext)
  const valorTotal = itensCheckout.reduce(
    (acum, atual) => acum + (atual.preco * atual.quantidade), 0
  ).toFixed(2)

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Sacola</Text>
      <Text style={styles.subtitulo}>Checkout</Text>

      { itensCheckout.length !== 0 ? 
      <View>
        {itensCheckout.map((item) => (
          <CheckoutItem item={item} key={item.id} />
        ))}
        <View style={styles.containerTotal}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.total}>{toReal(valorTotal)}</Text>
        </View>
        <Botao titulo='Finalizar Compra' />
        <TouchableOpacity onPress={() => navigation.push('ListaProdutos')}>
          <Text style={styles.textoContinuar}>Continuar Comprando</Text>
        </TouchableOpacity>
      </View> 
      : 
        <SacolaVazia />
      }
    </View>
  )
}

