import type { FC, ChangeEvent } from 'react'
import { useState } from 'react'
import './style.css'

interface Props {
  id: number;
  setValue: (id: number, value: string) => void;
  addNewInput: () => void;
  deleteInput: (id: number) => void;
}

const Input: FC<Props> = ({ id, setValue, addNewInput, deleteInput }) => {
  const [triggered, setTriggered] = useState(false)
  const [value, SetValue] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!triggered) {
      setTriggered(true)
      addNewInput()
    }
    SetValue(event.target.value)
  }

  const handleSetFinalValue = () => { setValue(id, value) }

  const handleDelete = () => { if (triggered) deleteInput(id) }

  return (
    <label className='container'>
      <input
        className='input'
        value={value}
        onChange={handleChange}
        onBlur={handleSetFinalValue}
      />
      <button
        onClick={handleDelete}
        disabled={!triggered}
        className='delete'
      >
        X
      </button>
    </label>
  )
}

export default Input