import React from 'react'
import TodoInputs from './TodoInputs'
import TodoShow from './TodoShow'
import { Stlist } from './styles'

const Todos = ({
  todos, setTodos, setState, state,
}) => (
  <>
    <TodoInputs todos={todos} setTodos={setTodos} setState={setState} state={state} />
    <Stlist>
      <TodoShow todos={todos} setTodos={setTodos} state={state} setState={setState} />
    </Stlist>
  </>
)

export default Todos
