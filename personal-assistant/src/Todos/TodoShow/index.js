import React from 'react'
import {
  TodoLink,
  TodoContainer, SmallClearButton, TodoText, Li,
} from './styles'


const TodoShow = ({
  todos, setTodos, state,
}) => {
  const show = todos.filter(todo => todo.todo.includes(state))
  let name = 'show'
  return (
    show.map(({ todo, key }) => (
      <Li key={key} className="show">
        <TodoContainer className={name}>
          <SmallClearButton onClick={() => {
            name = 'collapse'

            // return setTodos(todos,
            // setTimeout(setTodos, 3000, (todos.filter(t => t.key !== key))))
            return setTodos(todos.filter(t => t.key !== key))
          }}
          >
          X
          </SmallClearButton>
          <TodoLink to={`/todos/${key}`}>
            <TodoText>
              {' '}
              {todo}
            </TodoText>
          </TodoLink>
        </TodoContainer>
      </Li>

    ))
  )
}


export default TodoShow
