import React, { useContext } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { fontFamilySemiBold, fontSizeXSmall, red } from '../../styles/styles'
import { DataContext } from '../../provider'

export default function Sacola() {
  const navigation = useNavigation()
  const { itensCheckout } = useContext(DataContext)

  return (
    <TouchableOpacity
      style={styles.containerSacola}
      onPress={() => navigation.push('Checkout')}
    >
      <Image
        source={require('../../assets/images/icone-sacola.png')}
        style={styles.image}
      />
      { itensCheckout.length > 0 ? 
        <View style={styles.containerQuantidade}>
          <Text style={styles.quantidade}>
            {itensCheckout.reduce((acum, atual) => acum + atual.quantidade, 0)}
          </Text>
        </View> 
      : null }

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerSacola: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 16,
  },
  image: {
    height: 24,
    width: 24,
  },
  containerQuantidade: {
    backgroundColor: red,
    minWidth: 24,
    height: 24,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -2,
    right: -2,
  },
  quantidade: {
    color: '#FFF',
    fontSize: fontSizeXSmall,
    fontFamily: fontFamilySemiBold,
    width: '100%',
    textAlign: 'center',
    paddingHorizontal: 4,
  }

})