import React, { useContext } from 'react'
import { View, Text, Image } from 'react-native'

import { DataContext } from '../../../../provider'
import { toReal } from '../../../../utils/moeda'
import Botao from '../../../../components/Botao'
import styles from './styles'


export default function DescricaoItem({ produto, style }) {
  const { estudio, itemName, titulo, imagem, itemDesc, preco } = { ...produto }
  const { adicionarItem } = useContext(DataContext)

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
        <Botao titulo='Comprar' onPress={() => adicionarItem(produto)} />
      </View>
    </View>
  )
}

