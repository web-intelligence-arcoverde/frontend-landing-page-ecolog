import { Container, DescriptionContainer, Title, Description } from './styled'

const CardSlide = ({ title, description, img }) => {
  return (
    <Container>
      <DescriptionContainer>
        <div style={{ width: '80%' }}>
          <Title style={{}}>{title}</Title>
          <div style={{ marginBottom: '10px' }} />
          <Description>{description}</Description>
          <div style={{ marginBottom: '10px' }} />
        </div>
      </DescriptionContainer>
      <DescriptionContainer>
        <img src={img} alt="Imagem Slide" />
      </DescriptionContainer>
    </Container>
  )
}

export default CardSlide
