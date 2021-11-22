import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const PollButton = ({ title = 'Title' }: PollButtonProps) => (
  <TouchableOpacity style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
)

export default PollButton

type PollButtonProps = {
  title?: string
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF3FE',
    width: '100%',
    borderRadius: 1000,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    marginVertical: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Futura',
  },
})
