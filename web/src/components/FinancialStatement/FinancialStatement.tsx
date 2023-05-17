import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'

const FinancialStatement = ({ characterInfo }) => {
  return (
    <Card maxW={{ base: '100%', md: '50vw' }} m={'10px auto'}>
      <CardHeader>Financial Statement</CardHeader>
      <CardBody>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={10}>
          <Flex alignItems={'flex-end'}>
            <Text fontSize="xs" pr={1}>
              {'17 BANK ACCOUNT:'}
            </Text>
            <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
              {characterInfo.finances.bankAccount || 0}
            </Text>
          </Flex>
          <Flex alignItems={'flex-end'}>
            <Text fontSize="xs" pr={1}>
              {'18 CASH ON HAND:'}
            </Text>
            <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
              {characterInfo.finances.cashOnHand}
            </Text>
          </Flex>
          <Flex alignItems={'flex-end'}>
            <Text fontSize="xs" pr={1}>
              {'18 LOANS:'}
            </Text>
            <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
              {characterInfo.finances.debt}
            </Text>
          </Flex>
          <Flex alignItems={'flex-end'}>
            <Text fontSize="xs" pr={1}>
              {'18 LOAN DAYS:'}
            </Text>
            <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
              {characterInfo.finances.loanDays}
            </Text>
          </Flex>
        </SimpleGrid>
      </CardBody>
    </Card>
  )
}

export default FinancialStatement
