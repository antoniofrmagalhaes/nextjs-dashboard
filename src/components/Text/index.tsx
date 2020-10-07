import React from 'react'
import { InputProps } from '@chakra-ui/core'

import { Container } from './styles'

interface ITextProps extends InputProps {
  label: string
}

const Text: React.FC<ITextProps> = props => {
  const { label } = props
  return (
    <Container {...props} fontSize={['xs']} active={true}>
      {label}
    </Container>
  )
}

export default Text
