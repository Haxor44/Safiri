import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from "./styles";
const InfoCard = ({ icon,text, style }) => {
  return (
    <View style={styles.container}>
        <Image source={icon} style={styles.icon}/>
      <Text style={[styles.title,style]}>{text}</Text>
    </View>
  )
}

export default React.memo(InfoCard);