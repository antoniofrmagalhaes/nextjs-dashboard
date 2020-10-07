import { Box } from '@chakra-ui/core'
import React from 'react'
import Navbar from '../../components/Navbar'

import Sidenav from '../../components/Sidenav'

import { ContentContainer, Content } from './styles'

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Box width="100%" height="100vh" position="relative">
      <Sidenav />
      <ContentContainer>
        <Navbar />
        <Content>{children}</Content>
      </ContentContainer>
    </Box>
  )
}

export default DashboardLayout
