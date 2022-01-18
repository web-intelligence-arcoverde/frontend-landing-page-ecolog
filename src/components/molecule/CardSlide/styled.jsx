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
  height: 85vh;

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
`
