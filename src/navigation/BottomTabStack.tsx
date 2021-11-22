import * as React from 'react'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import BlankScreen from '../screens/BlankScreen'
import SunSvg from '../../assets/svg/ic_sun.svg'
import HeartSvg from '../../assets/svg/ic_heart.svg'
import ChatSvg from '../../assets/svg/ic_chat.svg'
import SearchSvg from '../../assets/svg/ic_search-circle.svg'

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
    <Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#000' }}>
      <Screen
        name="Today"
        component={HomeScreen}
        options={{ tabBarIcon: SunSvg, tabBarAccessibilityLabel: 'Today tab' }}
      />
      <Screen
        name="Explore"
        component={BlankScreen}
        options={{ tabBarIcon: SearchSvg, tabBarAccessibilityLabel: 'Explore tab' }}
      />
      <Screen
        name="Favourites"
        component={BlankScreen}
        options={{ tabBarIcon: HeartSvg, tabBarAccessibilityLabel: 'Favourites tab' }}
      />
      <Screen
        name="Connect"
        component={BlankScreen}
        options={{
          tabBarIcon: ChatSvg,
          tabBarAccessibilityLabel: 'Connect tab',
        }}
      />
    </Navigator>
  )
}
