import React from 'react'
import Menu from '../../atomic/Menu'
import { Container } from './styled'
import Logo from '../../../assets/img/logo.png'
import Drawer from '../Drawer'

const Header = () => {
  return (
    <Container>
      <a href="#">
        <img src={Logo} alt="Logo" />
      </a>
      <Menu />
      <Drawer />
    </Container>
  )
}

export default Header
