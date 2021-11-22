import * as React from 'react'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import BlankScreen from '../screens/BlankScreen'

export type BottomTabStackParamsList = {
  Today: object | undefined
  Explore: object | undefined
  Favourites: object | undefined
  Connect: object | undefined
}
export type BottomTabStackNavigationProps =
  BottomTabNavigationProp<BottomTabStackParamsList>

const { Navigator, Screen } = createBottomTabNavigator<BottomTabStackParamsList>()

export default function BottomTabStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Today" component={HomeScreen} />
      <Screen name="Explore" component={BlankScreen} />
      <Screen name="Favourites" component={BlankScreen} />
      <Screen name="Connect" component={BlankScreen} />
    </Navigator>
  )
}
