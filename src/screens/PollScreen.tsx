import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import CloseSvg from '../../assets/svg/x.svg'
import PollButton from '../components/PollButton'
import { MainStackParamsList } from '../navigation/MainStack'

export default function PollScreen() {
  const { params } = useRoute<RouteProp<MainStackParamsList, 'Poll'>>()
  const { goBack } = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <CloseSvg stroke="#000" height={18} width={18} style={{ marginLeft: 8 }} />
      </TouchableOpacity>
      <Text style={styles.heading}>How often do you watch porn while masturbating?</Text>

      <View style={styles.poll}>
        {params?.data.map(el => (
          <PollButton title={el.text} />
        ))}

        <View style={styles.pollBottom}>
          <Text style={{ fontSize: 16, paddingBottom: 38 }}>4,899 responses</Text>
          <TouchableOpacity>
            <Text style={{ textDecorationLine: 'underline', fontSize: 16 }}>
              I don’t want to answer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 14,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    paddingTop: 32,
    fontFamily: 'Futura',
  },
  poll: {
    paddingTop: 32,
  },
  pollBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
})
