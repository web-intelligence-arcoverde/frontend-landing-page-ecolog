import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import CardSlide from '../../atomic/CardSlide'
import Img1 from '../../../assets/icons/photo1.svg'

import './styles.css'

const DATA = [
  {
    title: 'Pense no futuro e use menos.',
    description:
      'Estamos engajados no ciclo de triagem e reciclagem do lixo doméstico, reduzindo os danos ao meio ambiente.',
    img: Img1,
  },

  {
    title: 'Recicle ganhe pontos e ganhe recompensas',
    description:
      'Contribua para uma comunidade mais sustentável reciclando seus produtos usados ​​ganhe pontos e resgate recompensas para seus varejistas favoritos.',
    img: Img1,
  },
  {
    title: 'ajude o meio ambiente enquanto você ganha',
    description:
      'junte-se ao movimento para viver de forma mais sustentável e se sentir bem com os produtos que você descarta',
    img: Img1,
  },
]

function Slider() {
  return (
    <Fade autoplay={false}>
      {DATA.map((item) => {
        return (
          <CardSlide
            title={item.title}
            description={item.description}
            img={item.img}
          />
        )
      })}
    </Fade>
  )
}

export default Slider
