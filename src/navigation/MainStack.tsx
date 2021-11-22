import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import PollScreen from '../screens/PollScreen'
import BottomTabStack from './BottomTabStack'

export type MainStackParamsList = {
  Home: object | undefined
  Poll: object | undefined
}
export type MainStackNavigationProps = NativeStackNavigationProp<MainStackParamsList>

const { Navigator, Screen, Group } = createNativeStackNavigator<MainStackParamsList>()

export default function MainStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={BottomTabStack} />
        <Group screenOptions={{ presentation: 'modal' }}>
          <Screen name="Poll" component={PollScreen} />
        </Group>
      </Navigator>
    </NavigationContainer>
  )
}
