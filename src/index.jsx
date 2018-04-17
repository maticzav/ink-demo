import { h, Component, render, Color } from 'ink'
import Text from 'ink-big-text'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      awesome: 9000,
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    process.stdin.on('keypress', this.handleKeyPress)
  }

  componentWillUnmount() {
    process.stdin.removeListener('keypress', this.handleKeyPress)
  }

  handleKeyPress(ch, key) {
    const { awesome } = this.state

    switch (key.name) {
      case 'left':
        this.setState({ awesome: awesome - 1 })
        break
      case 'right':
        this.setState({ awesome: awesome + 1 })
        break
      default:
        return
    }
  }

  render() {
    return <Text text={`Cool ${this.state.awesome}`} colors={['blue']} />
  }
}

// Render it in CLI

render(h(Counter))
