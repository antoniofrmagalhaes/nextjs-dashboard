import styled, { css } from 'styled-components'
import { Text as ChakraText } from '@chakra-ui/core'

interface IAccordionHeaderProps {
  active?: boolean
}

export const Container = styled(ChakraText)<IAccordionHeaderProps>`
  cursor: pointer;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0.6;
  ${props =>
    props.active &&
    css`
      opacity: 1;
    `}
`
