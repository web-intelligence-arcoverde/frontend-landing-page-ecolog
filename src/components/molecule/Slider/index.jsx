import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import CardSlide from '../../atomic/CardSlide'
import Img1 from '../../../assets/icons/photo1.svg'
import Img2 from '../../../assets/icons/photo2.svg'
import Img3 from '../../../assets/icons/photo3.svg'
import Img4 from '../../../assets/icons/photo4.svg'
import Img5 from '../../../assets/icons/photo5.svg'
import './styles.css'

function Slider() {
  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
  }
  return (
    <div>
      <Zoom {...zoomInProperties}>
        <CardSlide
          title="Guia de Classificção"
          description="Prescisa de ajuda para triagem de lixo ? Dê uma olhada no nosso guia de classificação."
          img={Img1}
        />

        <CardSlide
          title="Horarios da coleta"
          description="Seja notificado quando o carro do lixo estiver perto de você."
          img={Img2}
        />
        <CardSlide
          title="Obtenha Recompensas"
          description="Ganhe pontos reciclandom seus resíduos ,troque seus pontos por descontos em nossos parceiros."
          img={Img3}
        />
        <CardSlide
          title="Mapeamento inteligente"
          description="Encontre os pontos de coleta mais próximos da sua casa."
          img={Img4}
        />
        <CardSlide
          title="Salve a terra"
          description="Reutilize o passado,recicle o presente e salve o futuro."
          img={Img5}
        />
      </Zoom>
    </div>
  )
}

export default Slider
