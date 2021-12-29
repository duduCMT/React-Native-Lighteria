import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { blue, fontFamilyRegular, fontFamilySemiBold, fontSizeMedium } from '../../styles/styles';

export default function Botao({ titulo, onPress, style, type }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: blue,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  texto: {
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeMedium,
    color: '#FFF',
    textTransform: 'uppercase',
  },
  secondaryContainer: {
    backgroundColor: 'none'
  },
  secondaryText: {
    color: blue
  }
});