import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import AnalogClock from './components/AnalogClock'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AnalogClock />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  }
})
