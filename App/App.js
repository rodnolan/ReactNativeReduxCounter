import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const instructions = 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});