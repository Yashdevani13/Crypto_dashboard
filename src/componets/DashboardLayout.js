import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'
import Topnav from './Topnav'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({ title, children }) => {

    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>
            <Flex>
                <Box display={{ base: "none", lg: "flex" }}> <Sidebar /> </Box>
                <SideDrawer isOpen={isOpen} onClose={onClose} />
                <Box flexGrow={1}>
                    <Topnav title={title} onOpen={onOpen} />
                    <Container mt="6" maxW="1000px" overflowX="hidden" overflowY="auto" h="calc(100vh - 88px)">{children}</Container>
                </Box>
            </Flex>
        </>
    )
}

export default DashboardLayout
