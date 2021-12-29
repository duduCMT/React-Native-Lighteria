import { StyleSheet } from "react-native";
import { gray, fontSizeSmall } from '../../../../styles/styles'

export default styles = StyleSheet.create({
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
    fontSize: fontSizeSmall,
    color: gray,
  }
})