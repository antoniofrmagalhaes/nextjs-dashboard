import React from 'react'

import { MenuButton, Bars } from './styles'

interface IOpenNavButtonProps {
  open: boolean
  toggleHandler: () => void
}

const OpenNavButon: React.FC<IOpenNavButtonProps> = ({
  open,
  toggleHandler
}) => {
  return (
    <MenuButton onClick={() => toggleHandler()} open={open}>
      <Bars open={open} />
    </MenuButton>
  )
}

export default OpenNavButon
