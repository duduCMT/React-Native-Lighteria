import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { DataContext } from '../../../../provider'
import { toReal } from '../../../../utils/moeda'
import Botao from '../../../../components/Botao'
import styles from './styles'
import ModalSucesso from '../../../../components/ModalSucesso'
import { useNavigation } from '@react-navigation/native'
import ModalImagem from '../ModalImagem'


export default function DescricaoItem({ produto, style }) {
  const navigation = useNavigation()
  const [modalImagemVisible, setModalImagemVisible] = useState(false)
  const [modalComprarVisible, setModalComprarVisible] = useState(false)

  const { adicionarItem } = useContext(DataContext)

  const { estudio, itemName, titulo, imagem, itemDesc, preco } = { ...produto }

  function handleComprar(){
    setModalComprarVisible(true)
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
        <TouchableOpacity onPress={() => setModalImagemVisible(true)}>
          <Image source={imagem} style={styles.imagem} />
        </TouchableOpacity>
      </View>
      <Text style={styles.textoDescricao}>{itemDesc}</Text>
      <View style={styles.footer}>
        <Text style={styles.preco}>{toReal(preco)}</Text>
        <Botao titulo='Comprar' onPress={handleComprar} />
      </View>
      <ModalSucesso 
        titulo='Produto na Sacola'
        visible={modalComprarVisible} 
        hiddenButtons
        onClose={() => setModalComprarVisible(false)}
      />
      <ModalImagem 
        imagem={imagem}
        titulo={titulo}
        itemName={itemName}
        visible={modalImagemVisible}
        onClose={() => setModalImagemVisible(false)}
      />
    </View>
  )
}

