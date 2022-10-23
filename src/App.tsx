import { useState } from 'react'
import './App.css'

import Input from './components/Input'

type InputVariable = {
  id: number,
  name: string,
  value: string,
}

function App() {
  const [counter, setCounter] = useState(1)
  const [inputs, setInputs] = useState<Array<InputVariable>>([
    {
      id: 0,
      name: "Test Attribute",
      value: ""
    }
  ])

  const setValue = (id: number, value: string) => {
    setInputs(oldVal => {
      return oldVal.map(input => {
        if (input.id === id) {
          return {...input, value }
        } else return input
      })
    })
  }

  const addNewInput = () => {
    setInputs(oldVal => [...oldVal, { id: counter, name: "Test Attribute", value: "" }])
    setCounter(oldVal => oldVal + 1)
  }

  const deleteInput = (id: number) => {
    setInputs(oldVal => oldVal.filter(input => input.id !== id))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const result = inputs.reduce<string[]>((prev, current) => {
      if (current.value) {
        return [...prev, current.value]
      } else {
        return prev
      }
    }, [])

    console.log(result)
  }

  return (
    <div className="App">
      <form
        onSubmit={handleSubmit}
      >
        {inputs.length
          ? (
            inputs.map(input => (
              <Input
                key={input.id}
                id={input.id}
                setValue={setValue}
                addNewInput={addNewInput}
                deleteInput={deleteInput}
              />
            ))
          )
          : undefined}
        <button
          className="action"
          type="submit"
        >
          Save
        </button>
        <button
          className="action"
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default App
