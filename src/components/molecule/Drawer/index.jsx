import React from 'react'
import Menu from '../../../assets/icons/menu.svg'
import { Container } from './styled'

const Drawer = () => {
  return (
    <Container>
      <button>
        <img src={Menu} alt="Menu Drop" />
      </button>
    </Container>
  )
}

export default Drawer
