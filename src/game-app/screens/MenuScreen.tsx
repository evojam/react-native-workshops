import * as React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export class MenuScreen extends React.Component<{}> {

  public render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Menu</Text>
        <View style={styles.menuButton}>
          <Button onPress={this.onStartPress} title='Start' />
        </View>
        <View style={styles.menuButton}>
          <Button onPress={this.onOptionsPress} title='Options' />
        </View>
      </View>
    )
  }

  private readonly onStartPress = () => {
    console.log('start') // tslint:disable-line no-console
  }

  private readonly onOptionsPress = () => {
    console.log('options') // tslint:disable-line no-console
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  menuButton: {
    marginTop: 20,
  },
  title: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
})
