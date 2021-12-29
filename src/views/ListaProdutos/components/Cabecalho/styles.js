import { StyleSheet } from 'react-native'
import { 
  backgroundColor, 
  fontFamilyBold, 
  fontFamilyRegular, 
  fontSizeMedium, 
  fontSizeXXLarge, 
  lighterGray, 
} from '../../../../styles/styles'

export default styles = StyleSheet.create({
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
    fontFamily: fontFamilyBold,
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