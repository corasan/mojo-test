import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const TextBubble = ({ type = 'Read', time = '10', children }: any) => (
  <View style={styles.container}>
    <View>
      <Text>
        {type} {time} min
      </Text>
    </View>
    <Text style={styles.text}>{children}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF3FE',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
    marginVertical: 10,
  },
  text: {
    color: '#101725',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '500',
  },
})

export default TextBubble
