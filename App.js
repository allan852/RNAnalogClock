import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Blink extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showText: true , text: this.props.text}

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText }
      })
      console.log(this.fetchData())
    }, 1000)
  }

  fetchData() {
    let url = "https://api.github.com/repos/vmg/redcarpet/issues?state=closed"
    fetch("https://facebook.github.io/react-native/movies.json")
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson)
        this.setState(() => {
          return {text: responseJson.description + "310"}
        })
        return responseJson.movies
      })
      .catch(error => {
      console.log(error)
    })
  }

  render(){
    let display = this.state.showText ? this.state.text : " "

    return (
      <Text>{display}</Text>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dashboard}>
          <View style={styles.percent1}></View>
          <View style={styles.percent2}></View>
          <View style={styles.innter}><Text>sss</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboard: {
    backgroundColor: '#222',
    height: 300,
    width: 300,
    borderRadius: 150,
    // borderTopRightRadius: 0,
    // borderBottomRightRadius: 0,
    // transform: [{rotate: "180deg"}]
  },
  percent1: {
    backgroundColor: 'red',
    height: 300,
    width: 150,
    borderRadius: 150,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    // transform: [{rotate: "10deg"}]
  },
  percent2: {
    position: "absolute",
    backgroundColor: 'red',
    height: 300,
    width: 150,
    left: 150,
    borderRadius: 150,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    transform: [{translateX: -75}, {rotate: "240deg"}, {translateX: 75}],
  },
  innter: {
    position: "absolute",
    backgroundColor: '#000',
    borderRadius: 130,
    height: 260,
    width: 260,
    top: 20,
    left: 20,
  }
});
