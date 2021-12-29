import { StyleSheet } from "react-native";
import { 
  blue, 
  fontFamilyBold, 
  fontFamilyExtraBold, 
  fontFamilyRegular, 
  fontFamilySemiBold, 
  fontSizeLarge, 
  fontSizeMedium, 
  fontSizeSmall, 
  fontSizeXXLarge 
} from '../../styles/styles'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
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
  containerTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  total: {
    fontFamily: fontFamilySemiBold,
    fontSize: fontSizeLarge,
    color: '#000',
    marginVertical: 36,
  },
  textoContinuar: {
    fontFamily: fontFamilyBold,
    fontSize: fontSizeSmall,
    color: blue,
    padding: 20,
    textAlign: 'center',
  }
})