import { StyleSheet } from "react-native";
import { blue, fontFamilyBold, fontFamilySemiBold, fontSizeLarge, fontSizeMedium, green } from "../../styles/styles";

export default styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 32,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  titulo: {
    color: green,
    fontFamily: fontFamilyBold,
    fontSize: fontSizeLarge,
  },
  mensagem: {
    marginTop: 16,
    fontSize: fontSizeMedium,
    color: 'black',
    textAlign: 'center',
  },
  footer: {
    marginTop: 24,  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoSecundario: {
    marginRight: 8,
    padding: 16,
  },
  textoBotaoSecundario:{
    color: '#000',
    fontFamily: fontFamilySemiBold,
    fontSize: fontSizeMedium,
    textTransform: 'uppercase',
  }
});
