import * as React from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type WelcomeState = {
  readonly springValue: Animated.Value,
}

const source = require('../../../assets/logo.png') // tslint:disable-line no-require-imports no-var-requires
const MIN_ANIMATED_VALUE = 0.3

export class WelcomeScreen extends React.Component<{}, WelcomeState> {

  public readonly state: WelcomeState = {
    springValue: new Animated.Value(MIN_ANIMATED_VALUE),
  }

  public render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={this.animateSpring}>
          <Animated.Image
            source={source}
            style={[styles.image, { transform: [{ scale: this.state.springValue } ] }]}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>REACT NATIVE</Text>
        <Text style={styles.titleText}>WORKSHOPS</Text>
      </View>
    )
  }

  public componentDidMount(): void {
    this.spring()
  }

  private readonly spring = () => {
    Animated.spring(
      this.state.springValue,
      {
        friction: 1.2,
        toValue: 1,
      },
    ).start()
  }

  private readonly animateSpring = () => {
    this.setState(
      { springValue: new Animated.Value(MIN_ANIMATED_VALUE) },
      () => this.spring(),
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 125,
    marginBottom: 30,
    width: 112,
  },
  titleText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  touchable: {
    marginTop: -40,
  },
})
