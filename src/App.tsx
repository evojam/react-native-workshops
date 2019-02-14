import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { WelcomeScreen } from './game-app/screens'

export default class App extends React.Component<{}> {
  public render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <WelcomeScreen />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})
