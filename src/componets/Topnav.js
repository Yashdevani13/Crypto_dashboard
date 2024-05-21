import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaBars, FaUserTie } from 'react-icons/fa'

const Topnav = ({title, onOpen}) => {
    return (
        <>
            <Box px="4" bg="white" >
                <HStack maxW="900px" h="16" justify="space-between" mx="auto">
                    {/* <Container> */}
                    <Icon as={FaBars} onClick={onOpen} display={{base:"block", lg:"none"}}/>
                    <Heading fontWeight="medium" fontSize='28px'>{title}</Heading>
                    <Menu>
                        <Menu>
                            <MenuButton>
                                <Icon as={FaUserTie} fontSize='20px'/>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Log Out</MenuItem>
                                <MenuItem>Support</MenuItem>
                            </MenuList>
                        </Menu>
                    </Menu>
                    {/* </Container> */}
                </HStack>
            </Box>
        </>
    )
}

export default Topnav
