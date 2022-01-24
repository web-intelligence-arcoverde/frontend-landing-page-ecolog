import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'

import Background from '../../../assets/img/backgroundHome.png'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 88vh;

  img {
    width: 60%;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    text-align: center;
    height: 95vh;
    margin-top: -40px;
  }
`

export const Title = styled.h1`
  font-size: 38px;
  color: ${COLORS.priamryGreen};
`

export const Description = styled.h3`
  color: ${COLORS.primarySilver};
`

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 769px) {
    h1 {
      font-size: 25px;
    }
    h2 {
      width: 25ch;
      font-size: 20px;
    }
    img {
      width: 70%;
      margin-bottom: 100px;
    }
  }
`
