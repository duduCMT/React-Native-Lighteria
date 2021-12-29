import React from 'react'
import { View } from 'react-native'
import Background from './components/Background'
import styles from './styles'
import DescricaoItem from './components/DescricaoItem'

export default function DetalhesProduto({route}){
  const produto = route.params.produto
  return(
    <View style={{flex: 1}}>
      <Background />
      <View style={styles.descricaoArea}>
        <DescricaoItem produto={produto} style={styles.descricaoItem} />
      </View>
    </View>
  )
}