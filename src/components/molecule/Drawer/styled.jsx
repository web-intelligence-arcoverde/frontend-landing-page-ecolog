import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 3%;
  left: 80%;
  img {
    width: 42px;
  }
  button {
    background: none;
    border: none;
  }
  @media (min-width: 769px) {
    display: none;
  }
`
