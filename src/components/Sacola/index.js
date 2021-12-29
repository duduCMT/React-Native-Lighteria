import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Sacola(){
  const navigation = useNavigation()

  return(
    <TouchableOpacity 
      style={styles.containerSacola}
      onPress={() => navigation.push('Checkout')}
    >
        <Image 
          source={require('../../assets/images/icone-sacola.png')} 
          style={styles.image} 
        />
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
})