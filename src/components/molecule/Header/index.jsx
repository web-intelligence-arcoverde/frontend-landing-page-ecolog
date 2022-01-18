import React from 'react'
import Menu from '../Menu'
import { Container } from './styled'
import Logo from '../../../assets/img/logo.png'

const Header = () => {
  return (
    <Container>
      <a href="#">
        <img src={Logo} alt="Logo" />
      </a>
      <Menu />
    </Container>
  )
}

export default Header
