// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // = '' initalizes default value of the string
  const [name, setName] = React.useState(initialName)
  // create a state
  // '' = initial value of that state
  function handleChange(event) {
    setName(event.target.value)
    // when you call set setName - trigger rerender of that component
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Gregory" />
}

export default App
