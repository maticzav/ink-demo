import { h, Component, render, Text, Color } from 'ink'

class Counter extends Component {
  state = {
    count: 9000,
  }

  componentDidMount() {
    process.stdin.on('keypress', this.handleKeyPress)
  }

  componentWillUnmount() {
    process.stdin.removeListener('keypress', this.handleKeyPress)
  }

  handleKeyPress = (ch, key) => {
    const { count } = this.state

    switch (key.name) {
      case 'left':
        this.setState({ count: count - 1 })
        break
      case 'right':
        this.setState({ count: count + 1 })
        break
      default:
        return
    }
  }

  render() {
    return (
      <span>
        <div>
          <Text>We are this awesome:</Text>
        </div>
        <Text blue>{this.state.count}</Text>
      </span>
    )
  }
}

// Render it in CLI

render(<Counter />)
