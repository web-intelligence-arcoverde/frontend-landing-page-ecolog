import styled from 'styled-components'
import Background from '../../../assets/img/backgroundHome.png'
import { COLORS } from '../../../constants/COLORS'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  color: ${COLORS.green};
  height: 90vh;

  h1 {
    margin-bottom: 30px;
    font-size: 40px;
  }
  h2 {
    width: 35ch;
  }
  img {
    width: 30%;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    text-align: center;
    height: 95vh;
    margin-top: -40px;

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
