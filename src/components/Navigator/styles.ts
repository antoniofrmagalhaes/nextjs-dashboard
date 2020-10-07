import styled from 'styled-components'
import { Accordion as ChakraAccordion } from '@chakra-ui/core'

export const Accordion = styled(ChakraAccordion)`
  height: calc(100% - 50px - 70px);
  overflow-y: auto;
  scrollbar-color: #dddddd #eeeeee;
  scrollbar-width: thin;
  padding: 0;
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
