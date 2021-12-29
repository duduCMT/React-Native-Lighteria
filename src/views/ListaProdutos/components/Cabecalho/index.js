import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Sacola from '../../../../components/Sacola'
import { 
  backgroundColor, 
  fontFamilyRegular, 
  fontSizeMedium, 
  fontSizeXXLarge, 
  lighterGray, 
} from '../../../../styles/styles'

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
    fontSize: fontSizeXXLarge,
    color: '#000',
    fontFamily: 'OpenSans-ExtraBold',
    //textTransform: 'uppercase',
  },
  containerDescricao: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  separador: {
    height: 1,
    backgroundColor: lighterGray,
    width: '100%',
  },
  textoDescricao: {
    position: 'absolute',
    backgroundColor: backgroundColor,
    paddingHorizontal: 12,
    fontSize: fontSizeMedium,
    color: lighterGray,
    fontFamily: fontFamilyRegular,
  }
})