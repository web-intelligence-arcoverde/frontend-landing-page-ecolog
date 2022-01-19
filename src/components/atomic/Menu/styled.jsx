import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'
export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;

  a {
    margin: 0 30px;
    color: ${COLORS.gray};
    font-size: 18px;
    transition: 0.7s;
    :hover {
      color: ${COLORS.green};
    }
    @media (max-width: 769px) {
      display: none;
    }
  }
`
