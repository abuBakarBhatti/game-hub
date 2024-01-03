import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.webp"

const NavBar = () => {
  return (
    <HStack boxSize="60px">
        <Image src={logo}></Image>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar