import { StyleSheet } from "react-native";
import { blue, fontFamilyBold, fontFamilyRegular, fontFamilySemiBold, fontSizeLarge, fontSizeMedium, fontSizeSmall, gray, green } from "../../../../styles/styles";

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
    paddingVertical: 40,
    paddingHorizontal: 32,
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
  closeButton: {
    position: 'absolute',
    right: 0,
    padding: 16,
  },
  imagem: {
    height: 300,
  },
  titulo: {
    color: '#000',
    fontFamily: fontFamilyBold,
    fontSize: fontSizeLarge,
  },
  subtitulo: {
    color: gray,
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeSmall,
  },
  footer: {
    marginTop: 24,  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
