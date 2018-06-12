import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';

const instructions = 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
        </View>
      </Provider>
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