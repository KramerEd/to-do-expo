import { AppContainer } from './src/components'
import Main from './src/screens/Main'
import Screens from './src/screens/'
import { useColorMode } from 'native-base'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <AppContainer>
      <StatusBar style="auto" backgroundColor="#000000" />
      <Screens />
    </AppContainer>
  )
}
