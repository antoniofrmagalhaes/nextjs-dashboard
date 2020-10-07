import React from 'react'
import Link from 'next/link'

import { StyledLink } from './styles'

import Text from '../../components/Text'

interface ICustomLinkProps {
  label: string
  href: string
}

const CustomLink: React.FC<ICustomLinkProps> = ({ label, href }) => {
  return (
    <Link href={href}>
      <StyledLink>
        <Text label={label} paddingLeft="16px" fontWeight="bold" />
      </StyledLink>
    </Link>
  )
}

export default CustomLink
