import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as Progress from 'react-native-progress'
import TextBubble from '../components/TextBubble'
import Notification from '../components/Notification'
import { MainStackNavigationProps } from '../navigation/MainStack'
import UserSvg from '../../assets/svg/user.svg'
import EditSvg from '../../assets/svg/edit.svg'

export default function HomeScreen() {
  const { top } = useSafeAreaInsets()
  const [notificationShown, setNotificationShown] = useState(false)
  const { navigate } = useNavigation<MainStackNavigationProps>()
  const [data, setData] = useState([])

  const loadData = async () => {
    try {
      const res = await fetch('https://api.jsonbin.io/b/619254c40ddbee6f8b0bc2af')
      const result = await res.json()
      if (result) {
        setData(result?.answers_options)
        setNotificationShown(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const onOpen = () => {
    navigate('Poll', { data })
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View
        style={[styles.topPart, { paddingTop: top, justifyContent: 'space-between' }]}
      >
        <View style={{ alignItems: 'flex-end', paddingVertical: 19 }}>
          <UserSvg />
        </View>
        <View>
          <Text style={[styles.text, { fontSize: 16 }]}>Your current goal</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={[styles.text, { fontSize: 30, fontWeight: '700', marginRight: 10 }]}
            >
              Feel more confident
            </Text>
            <EditSvg />
          </View>
          <View style={{ paddingVertical: 15 }}>
            <Progress.Bar
              progress={0.2}
              width={200}
              color="#fff"
              borderWidth={0}
              unfilledColor="#293044"
            />
          </View>
          <Text style={styles.text}>1 / 7 days completed</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.day}>Day 1</Text>
        <TextBubble>How porn affects your confidence</TextBubble>
        <TextBubble type="Listen" time="9">
          Create positive views of your erections
        </TextBubble>
      </View>

      <Notification
        description="Mojo’s daily poll 📅"
        shown={notificationShown}
        onClose={() => setNotificationShown(false)}
        onOpen={onOpen}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topPart: {
    width: '100%',
    height: '35%',
    paddingHorizontal: 16,
    backgroundColor: '#101725',
    paddingBottom: 20,
  },
  text: {
    color: '#fff',
    paddingVertical: 2,
  },
  content: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 22,
  },
  day: {
    fontSize: 24,
    fontWeight: '700',
    paddingVertical: 10,
  },
})
