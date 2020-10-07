import { Flex } from '@chakra-ui/core'
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

import OpenNavButon from '../OpenNavButon'
import Profile from '../Profile'
import Navigator from '../Navigator'

import { Container } from './styles'

import config from '../../config/sidenav'

const Sidenav: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <Container open={open}>
        <OpenNavButon open={open} toggleHandler={() => setOpen(!open)} />
        <Flex height="100%" flexDirection="column">
          <Flex height="50px" borderBottom="1px" borderColor="gray.300"></Flex>
          <Profile />
          <Navigator config={config} />
          {/* <Flex
            height="50px"
            justifyContent="center"
            alignItems="center"
            borderTop="1px"
            borderColor="gray.300"
          >
            <Text>&copy; food company inc.</Text>
          </Flex> */}
        </Flex>
      </Container>
    </OutsideClickHandler>
  )
}

export default Sidenav
