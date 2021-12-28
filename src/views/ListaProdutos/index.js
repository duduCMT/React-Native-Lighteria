import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Cabecalho from './components/Cabecalho'
import data from '../../mock/mock'
import Produto from './components/Produto'

export default function ListaProdutos(){
  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        data={data}
        renderItem={({item}) => <Produto {...item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Cabecalho />
        }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16   
  }
})