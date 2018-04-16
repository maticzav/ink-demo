import { h, Component, render, Text } from 'ink'

class Counter extends Component {
  constructor() {
    super()

    this.state = {
      i: 10,
    }
  }

  render() {
    return <Text blue>{this.state.i} tests passed</Text>
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        i: this.state.i + 1,
      })
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
}

// Render it in CLI

render(<Counter />)
