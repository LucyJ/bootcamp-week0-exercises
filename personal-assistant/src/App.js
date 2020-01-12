import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  Switch,
  Route,
} from 'react-router-dom'
import NavBar from './NavBar'
import theme from './theme'
import Home from './Home'
import Todos from './Todos'
import Details from './Details'

const App = () => {
  const [todos, setTodos] = useState([])
  const [state, setState] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div>
        <Switch>
          <Route path="/todos/:id">
            <Details todos={todos} setTodos={setTodos} />
          </Route>
          <Route path="/todos">
            <Todos todos={todos} setTodos={setTodos} state={state} setState={setState} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>

  )
}

export default App
