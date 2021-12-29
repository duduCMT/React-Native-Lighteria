import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Botao from '../../components/Botao'
import ModalSucesso from '../../components/ModalSucesso'
import SacolaVazia from './components/SacolaVazia'
import styles from './styles'

import { DataContext } from '../../provider'
import { toReal } from '../../utils/moeda'
import { CheckoutItem } from './components/CheckoutItem'

export default function Checkout() {
  const navigation = useNavigation()
  const [abrirModal, setAbrirModal] = useState(false)
  const { itensCheckout, limparItens } = useContext(DataContext)

  const valorTotal = itensCheckout.reduce(
    (acum, atual) => acum + (atual.preco * atual.quantidade), 0
  ).toFixed(2)

  function onCloseModal(){
    setAbrirModal(false)
    navigation.popToTop()
    limparItens()
  }

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

          <View style={styles.containerButtons}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textoContinuar}>Voltar</Text>
            </TouchableOpacity>
            <Botao 
              titulo='Finalizar Compra' 
              onPress={() => setAbrirModal(true)} 
            />
          </View>
        </View> 
        <ModalSucesso 
          titulo='Compra Finalizada!' 
          mensagem='Obrigado por comprar na Lighteria!'
          hiddenButtons 
          visible={abrirModal}
          onClose={onCloseModal}
        />
      </>
      : 
        <SacolaVazia />
      }
    </View>
  )
}

