import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Botao from '../../components/Botao'
import SacolaVazia from './components/SacolaVazia'
import styles from './styles'

import { DataContext } from '../../provider'
import { toReal } from '../../utils/moeda'
import { CheckoutItem } from './components/CheckoutItem'

export default function Checkout() {
  const navigation = useNavigation()
  const { itensCheckout } = useContext(DataContext)
  const valorTotal = itensCheckout.reduce(
    (acum, atual) => acum + (atual.preco * atual.quantidade), 0
  ).toFixed(2)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Minha Sacola</Text>
        <Text style={styles.subtitulo}>Checkout</Text>
      </View>

      { itensCheckout.length !== 0 ? 
      <>
        <FlatList 
          data={itensCheckout}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <CheckoutItem item={item}/>
          )}
          contentContainerStyle={styles.listaItens}
        />
        <View style={styles.footer}>
          <View style={styles.containerTotal}>
            <Text style={styles.total}>Total:</Text>
            <Text style={styles.valorTotal}>{toReal(valorTotal)}</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textoContinuar}>Voltar</Text>
            </TouchableOpacity>
            <Botao titulo='Finalizar Compra' />
          </View>
        </View> 
      </>
      : 
        <SacolaVazia />
      }
    </View>
  )
}

