import React from 'react'
import { View, Text } from 'react-native'
import Sacola from '../../../../components/Sacola'
import styles from './styles'

export default function Cabecalho() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <Sacola />
      </View>
      <View style={styles.containerDescricao}>
          <View style={styles.separador} />
          <Text style={styles.textoDescricao}>Categorias</Text>
      </View>
    </View>
  )
}

