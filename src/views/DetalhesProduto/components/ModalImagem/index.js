import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

export default function ModalImagem({ imagem, titulo, itemName, visible, onClose }) {
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
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={24} color='#000' />
          </TouchableOpacity>
          <Image source={imagem} style={styles.imagem} resizeMode="center"/>
          <Text style={styles.titulo}>{itemName}</Text>
          <Text style={styles.subtitulo}>{titulo}</Text>
        </View>
      </View>
    </Modal>
  );
};

