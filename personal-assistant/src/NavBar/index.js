import React from 'react'
import { NavContainer } from './styles'
import NavButton from './NavButton'

const NavBar = () => (
  <NavContainer>
    <NavButton to="/" text="Home" />
    <NavButton to="/todos" text="Todo" />
  </NavContainer>
)

export default NavBar
