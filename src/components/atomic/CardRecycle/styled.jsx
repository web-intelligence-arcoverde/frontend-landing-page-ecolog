import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 22%;
  height: 70vh;
  border-radius: 6px;
  text-align: center;
  color: ${COLORS.green};
  img {
    width: 100px;
  }
  p {
    padding: 0 15px;
  }
  button {
    width: 90%;
    height: 42px;
    border-radius: 6px;
    border: none;
    font-size: 18px;
    color: ${COLORS.white};

    :hover {
      cursor: pointer;
    }
  }
`
