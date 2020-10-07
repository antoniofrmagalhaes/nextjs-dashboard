import styled from 'styled-components'
import { CloseButton as ChakraCloseButton } from '@chakra-ui/core'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  > svg {
    color: #444444;
  }
  > input {
    flex: 1;
    margin: 0 10px;
    background: 0;
    &::placeholder {
      font-size: 14px;
      color: #777777;
    }
    &:focus {
      outline-width: 0;
    }
  }
`

export const Content = styled.div`
  position: absolute;
  max-height: 200px;
  top: calc(50px + 8px);
  left: 8px;
  right: 8px;
  padding: 8px 35px;
  border-radius: 4px;
  background: #ffffff;
  overflow-y: auto;
  scrollbar-color: #dddddd #eeeeee;
  scrollbar-width: thin;
  &::-webkit-scrollbar-track {
    background-color: #eeeeee;
  }

  &::-webkit-scrollbar {
    width: 7px;
    background-color: #eeeeee;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dddddd;
  }
  @media (min-width: 1024px) {
    overflow-y: scroll;
  }
`

export const CloseButton = styled(ChakraCloseButton)`
  &:focus {
    outline: 0;
  }
`
