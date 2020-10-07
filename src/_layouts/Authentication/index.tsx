import { Box } from '@chakra-ui/core'
import React from 'react'

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Box width="100%" height="100vh" position="relative">
      {children}
    </Box>
  )
}

export default DashboardLayout
