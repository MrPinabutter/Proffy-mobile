import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBGImage from '../../assets/images/give-classes-background.png'

import styles from '../GiveClasses/styles';

function GiveClasses() {
  const { goBack } = useNavigation()

  function handleNavigation() {
    goBack();
  }

  return(
    <View style={styles.container}>
      <ImageBackground 
        resizeMode='contain' 
        source={giveClassesBGImage} 
        style={styles.content}
      >
        <Text style={styles.title}> Quer ser um Proffy? </Text>
        <Text style={styles.description}> Para se cadastrar, você precisa se cadastrar na nossa plataforma web. </Text>

      </ImageBackground>
      <RectButton onPress={handleNavigation} style={styles.okButton}>
        <Text style={styles.okButtonText}> Tudo bem! </Text>
      </RectButton>
    </View>

  )
}

export default GiveClasses;