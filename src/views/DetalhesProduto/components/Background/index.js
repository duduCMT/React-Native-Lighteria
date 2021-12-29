import React from 'react'
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Sacola from '../../../../components/Sacola'
import styles from './styles'

export default function Background(){
  const navigation = useNavigation()

  return (
    <View style={styles.container} >
      <ImageBackground 
        resizeMode='cover'
        source={require('../../../../assets/images/bgimg.jpg')}
        style={styles.background}
      >
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image 
              source={require('../../../../assets/images/flecha-esquerda.png')}
              style={styles.imagemSeta}
            />
          </TouchableOpacity>
          <Sacola />
        </View>
      </ImageBackground>
    </View>
  )
}

