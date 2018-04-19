import { h, Component, render, Text } from 'ink'
import TextInput from 'ink-text-input'
import SelectInput from 'ink-select-input'

const isEmpty = a => a.length === 0
const notEmpty = a => a.length !== 0

class TodoList extends Component {
  state = {
    input: '',
    todos: [],
  }

  handleInputChange = input => {
    this.setState({ input })
  }

  handleAddTodo = description => {
    const { input } = this.state

    if (isEmpty(input)) {
      return
    }

    this.setState(({ todos }) => ({
      input: '',
      todos: [
        {
          id: todos.length,
          description,
        },
        ...todos,
      ],
    }))
  }

  handleCompleteTodo = item => {
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
          <Text>Add a todo: </Text>
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
          focus={notEmpty(items) && isEmpty(input)}
        />
        {isEmpty(items) && <Text green>Very productive today! 🎉</Text>}
      </span>
    )
  }
}

render(<TodoList />)
