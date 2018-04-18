# Ink Demo

This is a demo of Ink for my talk at Algoia, Paris.

```bash
yarn
yarn dev
```

## 1. Example (Hello World)

This example shows basic usage of Ink with Stateless components.

* mind the most top line where we import pragma to use Ink and render at the bottom!

```jsx
import { h, render } from 'ink'

// Render
render(h(Basic))
```

## 2. Example (Counter)

* This example illustrates how to use Ink Component to handle state changes and react to keyboard input.

```jsx
// Keyboard bindings
componentDidMount() {
  process.stdin.on('keypress', this.handleKeyPress)
}

componentWillUnmount() {
  process.stdin.removeListener('keypress', this.handleKeyPress)
}
```

## 3. Example (TODO List)

* This example shows the basic usage of Community written libraries which make Ink awesome!

```jsx
import { h, Component, render, Text } from 'ink'
import TextInput from 'ink-text-input'
import SelectInput from 'ink-select-input'

// Community components
<TextInput
  placeholder="..."
  value={input}
  onChange={this.handleInputChange}
  onSubmit={this.handleAddTodo}
/>
<SelectInput
  items={items}
  onSelect={this.handleCompleteTodo}
  focus={notEmpty(items) && empty(input)}
/>
```

## License

MIT @ Matic Zavadlal
