import { Flex, Avatar, Text, PseudoBox, AvatarBadge } from '@chakra-ui/core'
import React from 'react'

const Profile: React.FC = () => {
  return (
    <Flex
      height="70px"
      justifyContent="space-between"
      alignItems="center"
      padding="16px"
      borderBottom="1px"
      borderColor="gray.300"
      backgroundColor="white"
    >
      <Avatar name="Arnold Waltz" width="40px" height="40px">
        <AvatarBadge
          size="14px"
          bottom="2px"
          right="2px"
          bg="green.500"
          border="1px"
          borderColor="gray.200"
        />
      </Avatar>
      <Flex flexDir="column" mx="10px" pt="5px">
        <Text lineHeight="1" fontSize="12px" fontWeight="bold" color="gray.700">
          Arnold Schwarzenegger
        </Text>
        <Text fontSize="11px" color="#777777">
          Online
        </Text>
      </Flex>
      <Flex flexDir="column">
        <PseudoBox
          as="button"
          height="22px"
          lineHeight="1"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="5px"
          rounded="2px"
          fontSize="10px"
          fontWeight="semibold"
          bg="#f5f6f7"
          borderColor="#ccd0d5"
          color="#4b4f56"
          _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9'
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
          }}
        >
          Profile
        </PseudoBox>
        <PseudoBox
          as="button"
          height="22px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="8px"
          marginTop="5px"
          rounded="2px"
          fontSize="10px"
          fontWeight="semibold"
          bg="#f5f6f7"
          borderColor="#ccd0d5"
          color="#4b4f56"
          _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9'
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
          }}
        >
          Logout
        </PseudoBox>
      </Flex>
    </Flex>
  )
}

export default Profile
