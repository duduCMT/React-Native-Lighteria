import React from 'react'
import { View, StyleSheet, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Sacola from '../../../../components/Sacola'

export default function Background(){
  const imgSrc = require('../../../../assets/images/bgimg.jpg')
  const navigation = useNavigation()

  return (
    <View style={styles.bgContainer} >
      <ImageBackground 
        resizeMode='cover'
        source={imgSrc}
        style={styles.imagemFundo}
      >
        <View style={styles.headerContainer}>
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

const styles = StyleSheet.create({
  bgContainer: {
    flex: 6
  },
  imagemFundo: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  imagemSeta: {
    width: 24,
    height: 24,
  }
})