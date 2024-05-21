import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../componets/DashboardLayout'
import { MdOutlineFileDownload } from "react-icons/md";
import TransactionTable from './componets/TransactionTable';
import { BsSearch } from 'react-icons/bs';

const Transactions = () => {

  const tabs = [
    {
      name: "All",
      count: "349",
    }, {
      name: "Deposit",
      count: "114",
    }, {
      name: "Withdraw",
      count: "213",
    }, {
      name: "Trade",
      count: "22",
    },
  ]
  return (
    <>
      <DashboardLayout title="Transactions">
        <Flex justify="end" mt="6" mb="3">
          <Button leftIcon={<Icon as={MdOutlineFileDownload} />}>Export CSV</Button>
        </Flex>
        <Card borderRadius="16px">
          <Tabs>
            <TabList pt="4" display="flex" justifyContent="space-between">
              <HStack>
                {
                  tabs.map((tab) => (
                    <Tab key={tab.name} display="flex" gap="2"  pb="4">
                      {tab.name} <Tag colorScheme='gray' borderRadius="full">{tab.count}</Tag>
                    </Tab>
                  ))
                }
              </HStack>
              <InputGroup maxW="200px" pr="2">
                <InputLeftElement pointerEvents='none'>
                  <Icon as={BsSearch} />
                </InputLeftElement>
                <Input type='tel' placeholder='Search...' />
              </InputGroup>

            </TabList>

            <TabPanels>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <p>four!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </DashboardLayout>
    </>
  )
}

export default Transactions
