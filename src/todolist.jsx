import { h, Component, render, Text } from 'ink'
import TextInput from 'ink-text-input'
import SelectInput from 'ink-select-input'

const empty = a => a.length === 0
const notEmpty = a => a.length !== 0

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      todos: [],
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this)
  }

  handleInputChange(input) {
    this.setState({ input })
  }

  handleAddTodo(description) {
    const { input, todos } = this.state

    if (empty(input)) {
      return
    }

    const todo = {
      id: todos.length,
      description,
    }

    this.setState({
      input: '',
      todos: [todo, ...todos],
    })
  }

  handleCompleteTodo(item) {
    const { todos } = this.state
    const { value } = item

    this.setState({
      todos: todos.filter(todo => todo.id !== value),
    })
  }

  render() {
    const { input, todos } = this.state
    const items = todos.map(todo => ({
      value: todo.id,
      label: todo.description,
    }))

    return (
      <span>
        <div>
          <Text green>Add a todo: </Text>
          <TextInput
            placeholder="..."
            value={input}
            onChange={this.handleInputChange}
            onSubmit={this.handleAddTodo}
          />
        </div>
        <SelectInput
          items={items}
          onSelect={this.handleCompleteTodo}
          focus={notEmpty(items) && empty(input)}
        />
        {empty(items) && (
          <Text grey>Good dog! You've finished all of the todos!</Text>
        )}
      </span>
    )
  }
}

render(h(TodoList))
