import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { LuArrowDownToLine } from "react-icons/lu";
import { TbArrowBarToUp } from "react-icons/tb";


const PortfolioSection = () => {
    return (
        <>
            <HStack  justify="space-between" bg="white" borderRadius="xl" p="6" align={{ base:"flex-start", xl:"center" }} flexDirection={{ base:"column", xl:"row"}} >
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="14px" fontWeight="500"> Total Portfolio Value </Text>
                        <Icon as={AiOutlineInfoCircle} />
                    </HStack>
                    <Text textStyle="h2" fontWeight="500">₹ 112,312.24</Text>
                </Stack>
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="14px" fontWeight="500"> Wallet Balances </Text>
                    </HStack>
                    <HStack spacing={2} align={{ base:"flex-start", sm:"center" }} flexDirection={{ base:"column", xl:"row"}}>
                        <HStack>
                            <Text textStyle="h2" fontWeight="500">22.39401000</Text> <Tag colorScheme='gray'>BTC</Tag>
                        </HStack>
                        <HStack>
                            <Text textStyle="h2" fontWeight="500">₹ 1,300.00</Text> <Tag  colorScheme='gray'>INR</Tag>
                        </HStack>
                    </HStack>
                </Stack>

                <HStack >
                    <Button><LuArrowDownToLine/>Deposit</Button>
                    <Button><TbArrowBarToUp/>Withdraw</Button>
                </HStack>
            </HStack>
        </>
    )
}

export default PortfolioSection
