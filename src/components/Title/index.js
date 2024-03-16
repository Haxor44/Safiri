import { Text } from 'react-native'
import React from 'react'
import styles from './styles';

const Title = ({text, style}) => {
  return (
      <Text style={[styles.title,style]}>{text}</Text>
  )
}

export default React.memo(Title);