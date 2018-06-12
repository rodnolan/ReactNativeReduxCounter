import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = { jumpBy: 1, valid: true };
  }

  render() {
    return (
      <View>
        <Button
          disabled={!this.state.valid}
          title="Up"
          onPress={() => this.props.increment(this.state.jumpBy)}/>
          {/* this.props.increment is a function that is passed in from the CounterContainer */}
          {/* this function just dispatches an Action */}
          {/* there is no payload because this is a simple implementation */}
        <TextInput 
          value={String(this.state.jumpBy)} 
          onChangeText={(text) => {
            // enforce numeric input
            let jumpBy = 0, valid = true;
            let numberEntered = Number(text);
            if (!isNaN(numberEntered)) {
              jumpBy = numberEntered;
            } else {
              valid = false;
            }

            this.setState({jumpBy, valid}, () => console.log('state.jumpBy is now ' + this.state.jumpBy));
          }}/>
        <Text
          style={styles.counter}
          onPress={this.props.reset}>
          {this.props.count}
        </Text>
        <Button
          disabled={!this.state.valid}
          title="Down"
          onPress={() => this.props.decrement(this.state.jumpBy)}/>
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