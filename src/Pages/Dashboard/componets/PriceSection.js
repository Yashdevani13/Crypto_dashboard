import { Button, Card, Flex, HStack, Icon, Image, Stack, Tab, Tabs, TabList, TabPanel, TabPanels, Text } from '@chakra-ui/react'
import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";


const PriceSection = () => {

    const timestamps = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"]
    return (
        <>
            <Card bg="white" borderRadius="xl" p="6">
                <Flex justify="space-between" align="start">
                    <Stack>
                        <HStack color="black.80">
                            <Text fontSize="14px" fontWeight="500"> Wallet Balances </Text>
                        </HStack>
                        <HStack spacing={2} align={{ base: "flex-start", sm: "center" }} flexDirection={{ base: "column", xl: "row" }}>
                            <HStack>
                                <Text textStyle="h2" fontWeight="500">₹26,670.25</Text>
                                <HStack fontWeight="medium" color="green.500">
                                    <Icon as={RiArrowRightUpLine} />
                                    <Text fontSize="small" textStyle="h2" fontWeight="500" color="green.500">0.04%</Text>
                                </HStack>
                            </HStack>
                        </HStack>
                    </Stack>
                    <HStack >
                        <Button><FaCirclePlus />Buy</Button>
                        <Button><FaMinusCircle />Sell</Button>
                    </HStack>
                </Flex>
                <Tabs variant='soft-rounded'>
                    <Flex justify="end">
                        <TabList  bg="black.5" p="3px">
                            {
                                ["1H","1D","1W","1M"].map((tab) => (
                                    <Tab _selected={{  bg: 'white' }} key={tab} fontSize="sm" p="6px" borderRadius="4">
                                        {tab}
                                    </Tab>
                                ))
                            }
                            {/* <Tab fontSize="small" borderRadius="5px">1H</Tab>
                            <Tab fontSize="small" borderRadius="5px">1D</Tab>
                            <Tab fontSize="small" borderRadius="5px">1W</Tab>
                            <Tab fontSize="small" borderRadius="5px">1M</Tab> */}
                        </TabList>
                    </Flex>
                    <TabPanels>
                        <TabPanel>
                            <Image w="100%" src='/Graph.svg' mt="48px" />
                            <HStack justify="space-between">
                                {
                                    timestamps.map((timestamp) => (
                                        <Text key={timestamp} fontSize="sm" color="black.80">
                                            {timestamp}
                                        </Text>
                                    ))
                                }
                            </HStack>
                        </TabPanel>
                        {/* <TabPanel>
                            <p>two!</p>
                        </TabPanel> */}
                    </TabPanels>
                </Tabs>
            </Card>
        </>
    )
}

export default PriceSection
