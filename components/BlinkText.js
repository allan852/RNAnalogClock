export default class Blink extends React.Component {
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