import React, { useEffect } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import CloseSvg from '../../assets/svg/x.svg'

const Notification = ({ description, shown, onClose, onOpen }: NotificationProps) => {
  const { height } = useWindowDimensions()
  const y = useSharedValue(height)
  const opacity = useSharedValue(0)
  const animatedStyle = useAnimatedStyle(() => {
    return { opacity: opacity.value, transform: [{ translateY: y.value }] }
  })

  const close = () => {
    y.value = withTiming(height, { duration: 1000 })
    opacity.value = withTiming(0, { duration: 400 })
    onClose && onClose()
  }

  useEffect(() => {
    if (shown) {
      y.value = withSpring(0, { damping: 16 })
      opacity.value = withTiming(1, { duration: 500 })
    }
  }, [shown])

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.notification}>
        <Text style={styles.description}>
          {description}
          <TouchableOpacity onPress={onOpen} accessibilityLabel="Open Mojo's daily poll">
            <Text style={styles.open}> Open</Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity
          onPress={close}
          accessibilityLabel="Dismiss Mojo's daily poll notification"
        >
          <CloseSvg stroke="#fff" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

type NotificationProps = {
  description: string
  shown?: boolean
  onClose?: () => void
  onOpen: () => void
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
  },
  notification: {
    width: '100%',
    backgroundColor: '#5033FF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  description: {
    fontSize: 16,
    color: '#fff',
  },
  open: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
    top: 2,
  },
})

export default Notification
