import Header from '../../components/molecule/Header'
import Slider from '../../components/molecule/Slider'
import Guide from '../../components/molecule/Guide'
import Map from '../../components/atomic/Map'
import { Container } from './styled'

const Home = () => {
  return (
    <Container>
      <Header />
      <Slider />
      <Guide />
    </Container>
  )
}

export default Home
