import React from 'react'
import { HStack, Switch, Text, useColorMode } from 'native-base'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack alignItems={'center'}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        mx={10}
      />
      <Text>Light</Text>
    </HStack>
  )
}

export default ThemeToggle
