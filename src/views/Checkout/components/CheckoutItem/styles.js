import { StyleSheet } from "react-native";
import { 
  fontFamilyLight, 
  fontFamilyRegular, 
  fontFamilySemiBold, 
  fontSizeMedium, 
  fontSizeSmall, 
  fontSizeXSmall,
} from '../../../../styles/styles'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  containerImagem: {
    flex: 20, 
    backgroundColor: '#F7F8FC',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 40,
    height: 50,
  },
  containerDesc: {
    flex: 45,
    padding: 18,
    justifyContent: 'center',
  },
  itemName: {
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeMedium,
    color: '#000',
  },
  titulo: {
    fontFamily: fontFamilyLight,
    fontSize: fontSizeSmall,
    color: '#000',
  },
  containerPreco: {
    flex: 35,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  quantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: fontSizeXSmall,
    fontFamily: fontFamilySemiBold,
    color: '#000',
  },
  preco: {
    fontFamily: fontFamilyRegular,
    color: '#000',
  }
})