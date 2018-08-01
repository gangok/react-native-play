import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.props.text = ' ';
      console.log(this.props.text);
    }, 1000);
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 5000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <Blink text='I love to blink' />
        </View>
        <View style={{flex: 2, backgroundColor: 'steelblue'}}>
          <Blink text='Yes blinking is so great' />
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <Blink text='Why did they ever take this out of HTML' />
        </View>
        <View style={{flex: 3, backgroundColor: 'powderblue'}}>
          <Blink text='Look at me look at me look at me' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
