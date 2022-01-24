import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  align-items: center;

  background-color: ${COLORS.thirdGray};

  box-shadow: 0px 5px 16px rgba(243, 243, 243, 0.437),
    0px 1.5217px 5px rgba(24, 24, 43, 0.0396),
    0px 2.0326px 17.0435px rgba(0, 0, 0, 0.0396);

  img {
    width: 38px;
  }
`
