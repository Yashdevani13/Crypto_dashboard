import { Box, Button, Card, Checkbox, Flex, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { IoIosMail } from 'react-icons/io'

const SupportCart = ({ leftComponet, icon, title, text }) => {
    return (
        <>
            <Flex gap={6} flexDirection={{
                base: "column",
                xl: "row",
            }}>
                <Stack maxW="384px">
                    <Icon as={icon} boxSize={6} color="p.purple" />
                    <Text fontWeight="medium" as="h1" textStyle="h2">{title}</Text>
                    <Text fontSize="sm" color="black.60">{text}</Text>
                </Stack>

                <Box maxW="550px" w="full">
                    {leftComponet}
                </Box>

            </Flex>
        </>
    )
}

export default SupportCart
