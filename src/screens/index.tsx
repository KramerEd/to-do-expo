import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from './Main'
import Sidebar from '../components/Sidebar'

const Drawer = createDrawerNavigator()

const Screens = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000'
      }}
      initialRouteName="Main"
      drawerContent={Sidebar}
    >
      <Drawer.Screen name="Main" component={Main} />
    </Drawer.Navigator>
  )
}

export default Screens
