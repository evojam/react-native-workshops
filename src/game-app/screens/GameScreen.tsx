import * as React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

export class GameScreen extends React.Component<{}> {

  public render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.gameOverText}>Game Over</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 4,
    height: '100%',
    justifyContent: 'center',
    paddingTop: 20,
    width: '100%',
  },
  gameOverText: {
    color: 'red',
    fontSize: 40,
  },
})
