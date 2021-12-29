import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Cabecalho from './components/Cabecalho'
import data from '../../mock/mock'
import Produto from './components/Produto'
import styles from './styles'

export default function ListaProdutos(){
  return (
    <View style={styles.container}>
      <FlatList 
        ListHeaderComponent={ <Cabecalho /> }
        renderItem={({item}) => <Produto produto={item} />}
        numColumns={2}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 16}}
      />
    </View>
  )
}