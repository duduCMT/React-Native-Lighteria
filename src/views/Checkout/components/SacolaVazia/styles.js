import { StyleSheet } from "react-native";
import { fontFamilyRegular, fontSizeMedium, gray } from "../../../../styles/styles";

export default styles = StyleSheet.create({
  containerSacolaVazia: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subiconSacolaVazia: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  sacolaVaziaIconContainer: {
    padding: 8,
  },
  textoSacolaVazia: {
    color: gray,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeMedium
  }
})