import React, { useState } from 'react'
import { Container, InputStyle, AddButton } from './styles'
// import TodoInput from './TodoInput'
// import TodoButton from './TodoButton'

const nanoid = require('nanoid')

const TodoContainer = ({
  todos, setTodos,
}) => {
  const [input, setInput] = useState('')

  return (
    <Container>
      <InputStyle type="text" placeholder="My Todo" value={input} onChange={e => setInput(e.target.value)} />
      <AddButton
        type="button"
        onClick={() => {
          setTodos([...todos, { todo: input, key: `id${nanoid()}` }])
          return setInput('')
        }}
      >
Add Todo

      </AddButton>
    </Container>
  )
}

export default TodoContainer
