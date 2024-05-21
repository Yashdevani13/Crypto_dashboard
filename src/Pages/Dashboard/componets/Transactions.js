import { Box, Button, Card, Divider, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { AiFillDollarCircle } from "react-icons/ai";
import { SiBitcoinsv } from "react-icons/si";

const Transactions = () => {

    const transactions = [
        {
            id: "1",
            icon: AiFillDollarCircle,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timetamp: "2022-06-09 7:06 PM",
        },
        {
            id: "2",
            icon: SiBitcoinsv,
            text: "BTC Sell",
            amount: "- 12.48513391 BTC",
            timetamp: "2022-05-27 12:32 PM",
            btc: "+ $81,123.10",
        },
        {
            id: "3",
            icon: AiFillDollarCircle,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timetamp: "2022-06-09 7:06 PM",
        },
    ]
    return (
        <>
            <Card bg="white" borderRadius="xl" p="6" h="full">
                <Text mb="6" fontSize="sm" color="#535D66" fontWeight="500">Recent Transactions</Text>
                <Stack spacing={4}>
                    {transactions.map((transactions,i) => (
                        // {i !== 0 && <Divider mt="6" />}
                        <Fragment   key={transactions.id}>
                            <Flex gap="4" >
                                <Grid placeItems="center" bg="black.5" boxSize={10} borderRadius="full">
                                    <Icon as={transactions.icon} />
                                </Grid>
                                <Flex justify="space-between" w="full" mt="2" >
                                    <Stack spacing={0}>
                                        <Text textStyle="h6">
                                            {transactions.text}
                                        </Text>
                                        <Text fontSize="sm" color="black.80 ">
                                            {transactions.timetamp}
                                        </Text>
                                    </Stack>
                                    <Text textStyle="h6">
                                        {transactions.amount}
                                    </Text>
                                    {/* <Text fontSize="sm" color="black.80 ">
                                        {transactions.btc}
                                    </Text> */}
                                </Flex>
                            </Flex>
                        </Fragment>
                    ))}
                </Stack>
                <Button w="full" colorScheme='gray' mt="6">View All</Button>
            </Card>

        </>
    )
}

export default Transactions
