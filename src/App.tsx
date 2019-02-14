// tslint:disable
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import { GameScreen, MenuScreen, WelcomeScreen } from './game-app/screens'

const MainNavigator = createStackNavigator({
  Home: {screen: WelcomeScreen},
  Game: {screen: GameScreen},
  Menu: {screen: MenuScreen},
})

export default createAppContainer(MainNavigator)

// -import {name as appName} from './app.json';

// -AppRegistry.registerComponent(appName, () => App);
// +Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

// +Navigation.events().registerAppLaunchedListener(() => {
// +  Navigation.setRoot({
// +    root: {
// +      component: {
// +        name: "navigation.playground.WelcomeScreen"
// +      }
// +    }
// +  });
// +});

// export default class App extends React.Component<{}> {
//   public render(): React.ReactNode {
//     return (
//       <View style={styles.container}>
//         <WelcomeScreen />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     flex: 1,
//     justifyContent: 'center',
//   },
// })
