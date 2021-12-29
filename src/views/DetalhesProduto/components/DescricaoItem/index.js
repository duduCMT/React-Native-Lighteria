import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Botao from '../../../../components/Botao'
import { DataContext } from '../../../../provider'
import { fontFamilyBold, fontFamilyRegular, fontSizeLarge, fontSizeMedium, fontSizeSmall, fontSizeXXLarge, lighterGray, lightGray } from '../../../../styles/styles'
import { toReal } from '../../../../utils/moeda'

export default function DescricaoItem({produto}){
  const {estudio, itemName, titulo, imagem, itemDesc, preco, id} = {...produto}
  const navigation = useNavigation()
  const { adicionarItem } = useContext(DataContext)

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.textoPosicao}>
            <View>
              <Text style={styles.textoSuperior}>{estudio}</Text>
              <Text style={styles.textoMedio}>{itemName}</Text>
              <Text style={styles.textoInferior}>{titulo}</Text>
            </View>
            <Image source={imagem} style={styles.imagem} />
          </View>
          <Text style={styles.textoDescricao}>{itemDesc}</Text>
          <View style={styles.rodape}>
            <Text style={styles.moeda}>{toReal(preco)}</Text>
            <Botao titulo='Comprar' onPress={ () => adicionarItem(produto) }/>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4
  },
  itemPosicao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 28,
    elevation: 4,
    marginTop: -56,
  },
  textoPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  imagem: {
    width: 30, height: 72,
  },
  textoSuperior: {
    fontFamily: fontFamilyBold,
    fontSize: fontSizeMedium,
    marginBottom: 4,
    color: '#000',
  },
  textoMedio: {
    fontFamily: fontFamilyBold,
    fontSize: fontSizeXXLarge,
    marginBottom: 4, 
    color: '#000', 
  },
  textoInferior: {
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeSmall,
    color: lighterGray, 
  },
  textoDescricao: {
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeSmall,
    color: lighterGray,  
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  moeda: {
    fontFamily: fontFamilyBold,
    fontSize: fontSizeLarge,
    color: '#000'
  }
})