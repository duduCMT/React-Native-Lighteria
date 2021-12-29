import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { gray, red } from '../../../../styles/styles'
import styles from './styles'

export default function SacolaVazia() {
  return (
    <View style={styles.containerSacolaVazia}>
      <View style={styles.sacolaVaziaIconContainer}>
        <Icon name="shopping-outline" size={96} color={gray} />
        <Icon name="close-thick" size={48} color={red} style={styles.subiconSacolaVazia} />
      </View>
      <Text style={styles.textoSacolaVazia}>Você não comprou nada ainda :(</Text>
    </View>
  )
}