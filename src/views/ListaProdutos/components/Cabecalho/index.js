import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Cabecalho() {
  return (
    <View style={styles.container}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 32,
  },
  titulo: {
    fontSize: 28,
    color: '#000',
    fontFamily: 'OpenSans-ExtraBold',
    //textTransform: 'uppercase',
  },
  containerSacola: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 16,
  },
  image: {
    height: 24,
    width: 24,
  },
  containerDescricao: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
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