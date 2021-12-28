import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Cabecalho() {
  return (
    <>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <View style={styles.containerSacola}>
          <Image source={require('../../../../assets/images/icone-sacola.png')} style={styles.image} />
        </View>
      </View>
      <View style={styles.containerDescricao}>
          <View style={styles.separador} />
          <Text style={styles.textoDescricao}>Categorias</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 28,
    color: '#000',
    fontFamily: 'OpenSans-Bold',
  },
  containerSacola: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 30
  },
  image: {
    height: 24,
    width: 24,
  },
  containerDescricao: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separador: {
    height: 1,
    backgroundColor: '#A1A5AA',
    width: '100%',
  },
  textoDescricao: {
    position: 'absolute',
    backgroundColor: '#F4F0F4',
    paddingHorizontal: 32,
    fontSize: 16,
    color: '#A1A5AA',
    fontFamily: 'OpenSans-Regular',
  }
})