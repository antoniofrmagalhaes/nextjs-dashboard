import styled, { css } from 'styled-components'

interface IMenuButtonProps {
  open: boolean
}

export const MenuButton = styled.div<IMenuButtonProps>`
  cursor: pointer;
  z-index: 999;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 12px;
  right: -38px;
  border-radius: 3px;
  ${props =>
    props.open &&
    css`
      right: 10px;
    `}
  @media screen and (min-width: 375px) {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

/* Burger to X animation */

const open = css`
  background-color: transparent;
`

const afterOpen = css`
  top: 0;
  transform: rotate(-45deg);
`

const beforeOpen = css`
  top: 0;
  transform: rotate(45deg);

  @supports (-moz-appearance: none) {
    top: 0rem;
  }
`

export const Bars = styled.span<IMenuButtonProps>`
  content: '';
  position: absolute;
  height: 3px;
  width: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: black;
  transition: 150ms;

  ${props => props.open && open}
  &::before {
    content: '';
    position: absolute;
    height: 3px;
    width: 1;
    top: 1rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: black;
    transition: 250ms;
    /* fixs a "bug" on firefox browsers */

    @supports (-moz-appearance: none) {
      top: 0.6rem;
    }
    ${props => props.open && beforeOpen}
  }
  &::after {
    content: '';
    position: absolute;
    height: 3px;
    width: 1;
    top: -1rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: black;
    transition: 250ms;
    ${props => props.open && afterOpen}
  }
`
