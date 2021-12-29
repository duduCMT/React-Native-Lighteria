import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { blue, fontFamilyBold, fontFamilySemiBold, fontSizeLarge, fontSizeMedium, green } from "../../styles/styles";
import Botao from "../Botao";

export default function ModalSucesso({ titulo, mensagem, botaoSecundario, botaoPrincipal, onBotaoPrincipal, visible, onClose }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Icon name="checkbox-marked-circle-outline" size={96} color={green} />
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.mensagem}>{mensagem}</Text>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.botaoSecundario} onPress={onClose}>
              <Text style={styles.textoBotaoSecundario}>{botaoSecundario}</Text>
            </TouchableOpacity>
            <Botao titulo={botaoPrincipal} style={styles.botaoAcao} onPress={onBotaoPrincipal}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
