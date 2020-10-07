import styled, { css } from 'styled-components'

import Text from '../Text'

interface IAccordionHeaderProps {
  active?: boolean
}

export const StyledLink = styled(Text)<IAccordionHeaderProps>`
  height: 40px;
  &:hover {
    background: #f3f3f3;
  }
  ${props =>
    props.active &&
    css`
      background: #f3f3f3;
    `}
`
