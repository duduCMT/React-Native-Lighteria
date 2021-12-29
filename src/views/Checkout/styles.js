import { StyleSheet } from "react-native";
import { 
  blue, 
  fontFamilyBold, 
  fontFamilyRegular, 
  fontFamilySemiBold, 
  fontSizeLarge, 
  fontSizeMedium, 
  fontSizeSmall, 
  fontSizeXXLarge, 
  gray
} from '../../styles/styles'

const paddingScreen = 24;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
  },
  header: {
    paddingTop: paddingScreen,
    paddingHorizontal: paddingScreen,
    backgroundColor: '#FFF',
    elevation: 4,
  },
  titulo: {
    fontFamily: fontFamilyBold,
    fontSize: fontSizeXXLarge,
    color: '#000',
  },
  subtitulo: {
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeMedium,
    marginBottom: 8,
  },
  listaItens: {
    paddingHorizontal: paddingScreen,
    paddingVertical: 16,
  },
  footer: {
    backgroundColor: '#FFF',
    padding: paddingScreen,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 12,
  },
  containerTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  total: {
    fontFamily: fontFamilyBold,
    fontSize: fontSizeLarge,
    color: '#000',
  },
  valorTotal: {
    fontFamily: fontFamilySemiBold,
    fontSize: fontSizeLarge,
    color: '#000',
  },
  textoContinuar: {
    fontFamily: fontFamilyBold,
    fontSize: fontSizeSmall,
    color: blue,
    padding: 20,
    textAlign: 'center',
  },
  
})