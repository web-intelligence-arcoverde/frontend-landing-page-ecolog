import React from 'react'
import Menu from '../../atomic/Menu'
import { Container } from './styled'
import Logo from '../../../assets/img/logo.png'
import Drawer from '../Drawer'

import { COLORS } from '../../../constants/COLORS'

const Header = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignItems: 'center',
        }}
      >
        <LogoContainer />
        <Menu />
        <Drawer />
      </div>
    </Container>
  )
}

const LogoContainer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <img src={Logo} alt="Logo" />
      <h4
        style={{
          color: `${COLORS.priamryGreen}`,
          fontWeight: 'bold',
          fontSize: '36px',
          marginLeft: '12px',
        }}
      >
        Ecolog
      </h4>
    </div>
  )
}

export default Header
