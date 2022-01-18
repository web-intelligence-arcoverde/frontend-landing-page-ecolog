import { Container } from './styled'

const CardSlide = ({ title, description, img }) => {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <img src={img} alt="Imagem Slide" />
    </Container>
  )
}

export default CardSlide
