import React from 'react'
import { Container } from './styled'

const CardRecycle = ({ img, title, items, tip, background }) => {
  return (
    <Container>
      <img src={img} alt="Lixeira Reciclável" />
      <h1>{title}</h1>
      <p>{items}</p>
      <p>{tip}</p>
      <button style={{ background }}>Veja Mais !</button>
    </Container>
  )
}

export default CardRecycle
