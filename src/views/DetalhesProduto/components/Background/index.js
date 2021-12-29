import React from 'react'
import { View, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
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
          <Icon
            name='arrow-back'
            size={27}
            color="#FFF"
          />
          </TouchableOpacity>
          <Sacola />
        </View>
      </ImageBackground>
    </View>
  )
}

