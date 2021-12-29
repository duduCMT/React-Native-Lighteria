import { StyleSheet } from "react-native";
import {
  fontFamilyBold,
  fontFamilyRegular,
  fontSizeLarge, 
  fontSizeMedium,
  fontSizeSmall, 
  fontSizeXXLarge, 
  lighterGray, 
} from '../../../../styles/styles'

export default styles = StyleSheet.create({
  card: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 28,
    elevation: 4,
  },
  textoPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  imagem: {
    width: 60, height: 72,
  },
  textoEstudio: {
    fontFamily: fontFamilyBold,
    fontSize: fontSizeMedium,
    marginBottom: 4,
    color: '#000',
  },
  textoItemName: {
    fontFamily: fontFamilyBold,
    fontSize: fontSizeXXLarge,
    marginBottom: 4,
    color: '#000',
  },
  textoTitulo: {
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeSmall,
    color: lighterGray,
  },
  textoDescricao: {
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeSmall,
    color: lighterGray,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  preco: {
    fontFamily: fontFamilyBold,
    fontSize: fontSizeLarge,
    color: '#000'
  }
})