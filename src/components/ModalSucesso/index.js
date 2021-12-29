import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { green } from "../../styles/styles";
import styles from "./styles";
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

