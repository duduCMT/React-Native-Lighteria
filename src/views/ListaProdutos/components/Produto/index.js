import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function Produto({titulo, imagem, }){
  return (
    <View style={styles.containerItem}>
      <Image source={imagem} style={styles.imagem} resizeMode='contain'/>
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    height: 168,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  imagem: {
    height: 80,
  },
  texto: {
    marginTop: 8,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#848486',
  }
})