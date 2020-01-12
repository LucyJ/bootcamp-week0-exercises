import React from 'react'
import TodoContainer from './TodoContainer'
import SearchLine from './SearchLine'

const TodoInputs = ({
  todos, setTodos, setState, state,
}) => (
  <div>
    <TodoContainer todos={todos} setTodos={setTodos} setState={setState} state={state} />
    <SearchLine todos={todos} setTodos={setTodos} setState={setState} state={state} />
  </div>
)

export default TodoInputs
