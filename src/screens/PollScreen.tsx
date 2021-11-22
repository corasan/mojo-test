import React, { useCallback } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CloseSvg from '../../assets/svg/x.svg'
import PollButton from '../components/PollButton'
import useAppSelector from '../hooks/useAppSelector'
import useAppDispatch from '../hooks/useAppDispatch'

export default function PollScreen() {
  const { goBack } = useNavigation()
  const { pollData, pollStats } = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  const vote = async (answer: string) => {
    try {
      const res = await fetch(
        `https://api.jsonbin.io/b/61927bef0ddbee6f8b0bd64c?answer=${answer}`,
      )
      const result = await res.json()
      dispatch({ type: 'POLL_STATS', payload: result })
    } catch (err) {
      console.error(err)
    }
  }

  const responseCount = useCallback(() => {
    return pollStats?.response_count?.toLocaleString()
  }, [pollStats])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <CloseSvg stroke="#000" height={18} width={18} style={{ marginLeft: 8 }} />
      </TouchableOpacity>
      <Text style={styles.heading}>How often do you watch porn while masturbating?</Text>

      <View style={styles.poll}>
        {pollData?.map((el: { text: string; slug: string }, i) => (
          <PollButton
            key={i}
            title={el.text}
            onPress={() => vote(el.slug)}
            {...(pollStats?.answer_stats && {
              percentage: pollStats?.answer_stats[el.slug] / 100,
            })}
          />
        ))}

        <View style={styles.pollBottom}>
          {pollStats && responseCount() !== '0' && (
            <Text style={{ fontSize: 16, paddingBottom: 38 }}>
              {responseCount()} responses
            </Text>
          )}
          <TouchableOpacity
            onPress={goBack}
            accessibilityLabel="Dismiss poll without an answer"
          >
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
