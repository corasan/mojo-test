import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const PollButton = ({ title = 'Title', percentage, onPress }: PollButtonProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
    {percentage && <Text style={styles.text}>{percentage}%</Text>}
  </TouchableOpacity>
)

export default PollButton

type PollButtonProps = {
  title?: string
  percentage?: number
  onPress: () => void
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF3FE',
    width: '100%',
    borderRadius: 1000,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    marginVertical: 6,
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Futura',
  },
})
