import styled, { css, keyframes } from 'styled-components'

interface IContainerProps {
  open: boolean
}

const slideIn = keyframes`
  0%{
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(0);
  }
`

const openMenu = css`
  animation: ${slideIn} 350ms ease forwards;
`

export const Container = styled.div<IContainerProps>`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 70%;
  height: 100%;
  color: #232323;
  border-right: 1px solid #dddddd;
  background: #ffffff;

  @media screen and (max-width: 1023px) {
    transform: translateX(-100%);
    ${props => props.open && openMenu};
  }

  @media (min-width: 420px) {
    width: 260px;
  }

  @media (min-width: 1600px) {
    width: 300px;
  }
`
