import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { fontFamilySemiBold, fontSizeMedium, lightBlue } from '../../styles/styles';

export default function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={styles.texto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaoContainer: {
    backgroundColor: lightBlue,
    padding: 20,
    borderRadius: 6,
  },
  texto: {
    fontFamily: fontFamilySemiBold,
    fontSize: fontSizeMedium,
    color: '#FFF',
  },
});