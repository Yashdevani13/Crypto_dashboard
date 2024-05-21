import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { BsArrowDownUp } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
const Sidebar = () => {
    const location = useLocation();

    const isActiveLink = (link) => {
        return location.pathname == link;
    }

    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/"
        },
        {
            icon: BsArrowDownUp,
            text: "Transactions",
            link: "/transaction",
        },
    ]
    return (
        <>
            {/* d-flex,flex-dr-col */}
            <Stack justify="space-between" boxShadow={{ base: "none", lg: "lg" }} w={{ base: "full", lg: "256px", }} height='full' bg="white" >
                <Box>
                    <Heading as="h1" textAlign="center" fontSize="20px" pt="56px">@DOSOMECODING</Heading>
                    <Box mt="6" mx="3" mb="6">
                        {navLinks.map((nav) => (
                            <Link to={nav.link} key={nav.text}>
                                {/* // d-flex,ail-item-center */}
                                <HStack
                                    bg={isActiveLink(nav.link) ? "#F3F3F7" : "transprent"}
                                    color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                                    borderRadius="10px" mx="3" py="3" px="4"
                                    _hover={{ bg: "#F3F3F7", color: "#171717" }}
                                >
                                    <Icon as={nav.icon} />
                                    <Text fontSize='14px' fontWeight="medium" >{nav.text}</Text>
                                </HStack>
                            </Link>
                        ))
                        }
                    </Box>
                </Box>
                <Box mt="6" mx="3">
                    <Link to="/support">
                        <HStack bg={isActiveLink("/support") ? "#F3F3F7" : "transprent"}
                            color={isActiveLink("/support") ? "#171717" : "#797E82"} 
                            borderRadius="10px" mb="4" mx="3" py="3" px="4" 
                            _hover={{ bg: "#F3F3F7", color: "#171717" }} >
                            <Icon as={BiSupport} />
                            <Text fontSize='14px' fontWeight="medium" >
                                Support
                            </Text>
                        </HStack>
                    </Link>
                </Box>
            </Stack>
        </>
    )
}

export default Sidebar
