import React from 'react'

//Styled-Components
import { Title, Nav, NavLink } from '../../styledComponents/styles'

const NavBar = () => {
  return (
    <Nav>
      <div>
        <Title href="/"> Diagnostikare</Title>
      </div>

      <div>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="/profile">Perfil</NavLink>
      </div>
    </Nav>
  )
}

export default NavBar
