import React, { useContext, useState } from 'react'
import { View, Text, Image } from 'react-native'

import { DataContext } from '../../../../provider'
import { toReal } from '../../../../utils/moeda'
import Botao from '../../../../components/Botao'
import styles from './styles'
import ModalSucesso from '../../../../components/ModalSucesso'
import { useNavigation } from '@react-navigation/native'


export default function DescricaoItem({ produto, style }) {
  const [modalVisible, setModalVisible] = useState(false)
  const { adicionarItem } = useContext(DataContext)
  const navigation = useNavigation()

  const { estudio, itemName, titulo, imagem, itemDesc, preco } = { ...produto }

  function handleComprar(){
    setModalVisible(true)
    adicionarItem(produto)
  }

  return (
    <View style={[styles.card, style]}>
      <View style={styles.textoPosicao}>
        <View>
          <Text style={styles.textoEstudio}>{estudio}</Text>
          <Text style={styles.textoItemName}>{itemName}</Text>
          <Text style={styles.textoTitulo}>{titulo}</Text>
        </View>
        <Image source={imagem} style={styles.imagem} />
      </View>
      <Text style={styles.textoDescricao}>{itemDesc}</Text>
      <View style={styles.footer}>
        <Text style={styles.preco}>{toReal(preco)}</Text>
        <Botao titulo='Comprar' onPress={handleComprar} />
      </View>
      <ModalSucesso 
        titulo='Produto na Sacola'
        visible={modalVisible} 
        hiddenButtons
        onClose={() => setModalVisible(false)}
      />
    </View>
  )
}

