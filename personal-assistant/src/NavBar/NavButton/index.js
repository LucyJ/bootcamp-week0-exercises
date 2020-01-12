import React from 'react'
import { NaviButton, NavLink } from './styles'

const NavButton = ({ to, text }) => (
  <NavLink to={to}>
    <NaviButton>{text}</NaviButton>
  </NavLink>
)

export default NavButton
