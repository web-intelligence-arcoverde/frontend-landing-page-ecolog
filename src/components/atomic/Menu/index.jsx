import React from 'react'
import { Navigation } from './styled'

const Menu = () => {
  return (
    <div>
      <Navigation>
        <li>
          <a href="#">Missão</a>
        </li>
        <li>
          <a href="#">Guia de reciclagem</a>
        </li>
        <li>
          <a href="#">Pontos de Coleta</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </Navigation>
    </div>
  )
}

export default Menu
