import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { blue, fontFamilySemiBold, fontSizeMedium } from '../../styles/styles';

export default function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.texto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: blue,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 6,
  },
  texto: {
    fontFamily: fontFamilySemiBold,
    fontSize: fontSizeMedium,
    color: '#FFF',
  },
});