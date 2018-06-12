import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Counter extends Component {
  render() {
    return (
      <View>
        <Button
          title="Up"
          onPress={this.props.increment}/>
          {/* this.props.increment is a function that is passed in from the CounterContainer */}
          {/* this function just dispatches an Action */}
          {/* there is no payload because this is a simple implementation */}
        <Text
          style={styles.counter}
          onPress={this.props.reset}>
          {this.props.count}
        </Text>
        <Button
          title="Down"
          onPress={this.props.decrement}/>
          {/* this.props.decrement is just a different version of the story decribed above */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});