import { h, Text, render } from 'ink'

const HelloWorld = () => (
  <span>
    <div>
      <Text blue>Hello Algolia!</Text>
    </div>
    <span>Ink </span>
    <span>is </span>
    <span>great!</span>
  </span>
)

// Render
render(<HelloWorld />)
