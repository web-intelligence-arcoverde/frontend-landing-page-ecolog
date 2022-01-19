import React from 'react'
import CardRecycle from '../../atomic/CardRecycle'
import { Container } from './styled'
import Green from '../../../assets/icons/recycle-green.svg'
import Red from '../../../assets/icons/recycle-red.svg'
import Yellow from '../../../assets/icons/recycle-yellow.svg'
import Blue from '../../../assets/icons/recycle-blue.svg'

const Guide = () => {
  return (
    <Container>
      <CardRecycle
        img={Green}
        title="Vidro"
        items="Itens: frascos, garrafas e vidros de conserva."
        tip="Dicas: lave-os com água de reúso e retire as tampas."
        background="#25995a"
      />
      <CardRecycle
        img={Red}
        title="Plástico"
        items="Itens: garrafas, embalagens de produtos de limpeza; potes de cremes e xampus; tubos e canos;"
        tip="Dicas: lave-os com água de reúso e retire as tampas."
        background="#ff0000"
      />
      <CardRecycle
        img={Yellow}
        title="Metal"
        items="Itens: latinhas de cerveja, refrigerante e sucos; esquadrias e molduras de quadros."
        tip="Dicas: latas devem ser amassadas ou prensadas para facilitar o armazenamento."
        background="#b9d90b"
      />
      <CardRecycle
        img={Blue}
        title="Papel e papelão"
        items="Itens: jornais, revistas, impressos em geral; caixas de papelão e embalagens longa-vida."
        tip="Dicas: Devem ser amassadas ou prensadas para facilitar o armazenamento."
        background="#0000ff"
      />
    </Container>
  )
}

export default Guide
