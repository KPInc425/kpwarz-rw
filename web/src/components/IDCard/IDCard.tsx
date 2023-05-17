import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'

const IDCard = ({ characterInfo }) => {
  const getRandomDate = () => {
    const maxDate = Date.now()
    const timeStamp = Math.floor(Math.random() * maxDate)
    return new Date(timeStamp)
  }
  return (
    <Card
      variant="outline"
      width={{ base: '95vw', lg: '90vw', xl: '65vw', '2xl': '50vw' }}
    >
      <CardHeader px={0} display={'flex'} flexDirection={'column'}>
        <Flex
          justifyContent={'space-between'}
          position={'relative'}
          wrap={{ base: 'wrap', sm: 'wrap' }}
          px={{ base: 4, sm: 20 }}
          zIndex={1}
        >
          <Flex>
            <Stack spacing={-2} justifyContent={'center'}>
              <Text
                fontSize={{ base: 'xs', sm: 'sm' }}
                fontWeight="bold"
                color={'green'}
                alignSelf={'flex-end'}
              >
                {characterInfo.game.currentCity.region.name.slice(0, 1)}
                {characterInfo.game.currentCity.region.name
                  .slice(1, 2)
                  .toUpperCase()}
              </Text>
              <Text
                fontSize={{ base: 'xs', sm: 'sm' }}
                fontWeight="bold"
                color={'green'}
              >
                {'USA'}
              </Text>
            </Stack>
            <Text
              fontSize={{ base: '1rem', sm: '2rem' }}
              fontWeight="bold"
              alignSelf={'center'}
              color={'green'}
            >
              {characterInfo.game.currentCity.region.name}
            </Text>
          </Flex>
          <Text fontSize={{ base: 'md', sm: 'xl' }} alignSelf={'center'}>
            {'Identification Card'}
          </Text>
        </Flex>
        <Text
          fontSize={{
            base: 'xs',
            sm: 'lg',
            md: '3xl',
            lg: '4xl',
            '2xl': '5xl',
          }}
          fontWeight="bold"
          color={'rgba(221, 221, 221, 0.158)'}
          position={'absolute'}
          textAlign={'center'}
          letterSpacing={{
            base: '0.75rem',
            md: '1rem',
            lg: '1.5rem',
            '2xl': '3rem',
          }}
          sx={{ top: 0, width: '100%' }}
        >
          {characterInfo.game.currentCity.region.name.toUpperCase()}
        </Text>
        <Divider />
      </CardHeader>
      <CardBody>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={2}>
          <Stack maxW={{ base: '75%', md: '100%' }} m={'0 auto'}>
            <Image objectFit="cover" src="https://i.imgur.com/H54NsMT.png" />
            <Text
              fontSize={{ base: 'xs', sm: 'sm' }}
              fontWeight="bold"
              textAlign={'center'}
              as={'i'}
              fontFamily={'cursive'}
            >
              {characterInfo.name}
            </Text>
          </Stack>
          <Stack>
            <Flex alignItems={'flex-end'}>
              <Text fontSize="xs" pr={1}>
                {'4d LIC# '}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {Math.floor(Math.random() * (99999999 - 10000000) + 10000000) +
                  characterInfo.name.split(' ')[0].slice(0, 1).toUpperCase() +
                  characterInfo.name.split(' ')[1].slice(0, 1).toUpperCase()}
              </Text>
            </Flex>
            <Flex alignItems={'flex-end'}>
              <Text fontSize="xs" pr={1}>
                {'1'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {characterInfo.name.split(' ')[1]}
              </Text>
            </Flex>
            <Flex alignItems={'flex-end'}>
              <Text fontSize="xs" pr={1}>
                {'2'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {characterInfo.name.split(' ')[0]}
              </Text>
            </Flex>
            <Flex alignItems={'flex-end'} pt={4}>
              <Text fontSize="xs" pr={1}>
                {'3 DOB:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {getRandomDate().toLocaleDateString()}
              </Text>
            </Flex>
            <Flex alignItems={'flex-end'}>
              <Text fontSize="xs" pr={1}>
                {'5 INFLUENCE:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {characterInfo.background}
              </Text>
            </Flex>
            <Flex alignItems={'flex-end'}>
              <Text fontSize="xs" pr={1}>
                {'6 CITY:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {characterInfo.game.startLocation}
              </Text>
            </Flex>
            <Flex alignItems={'flex-end'} pt={4}>
              <Text fontSize="xs" pr={1}>
                {'7 HEALTH:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {[characterInfo.health, '/', characterInfo.maxHealth]}
              </Text>
            </Flex>
            <Flex alignItems={'flex-end'}>
              <Text fontSize="xs" pr={1}>
                {'8 DAYS:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {[
                  characterInfo.game.currentDay,
                  '/',
                  characterInfo.game.maxDays,
                ]}
              </Text>
            </Flex>
            <Flex alignItems={'flex-end'}>
              <Text fontSize="xs" pr={1}>
                {'9 TOD:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {characterInfo.game.timeOfDay}
              </Text>
            </Flex>
          </Stack>
          <Stack>
            <Flex alignItems={'flex-end'}>
              <Text fontSize="xs" pr={1}>
                {'10 CLASS:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'} color={'red'}>
                {'DONOR '}
                <Icon as={AiFillHeart} color={'red'} mb={'-1px'} />
              </Text>
            </Flex>
            <Flex alignItems={'flex-end'}>
              <Text fontSize="xs" pr={1}>
                {'11 STORAGE:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {characterInfo.storageType}
              </Text>
            </Flex>
            <Flex alignItems={'flex-end'}>
              <Text fontSize="xs" pr={1}>
                {'12 ITEMS:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {[characterInfo.currentItems, '/', characterInfo.maxItems]}
              </Text>
            </Flex>
            <Flex
              display={{ base: 'none', sm: 'flex' }}
              direction={{ base: 'column', sm: 'row' }}
              alignItems={{ base: 'flex-start', sm: 'flex-end' }}
              alignSelf={{ base: 'flex-start', sm: 'center' }}
              wrap={{ md: 'wrap', lg: 'nowrap' }}
            >
              <Text fontSize="xs" pr={1} whiteSpace={'nowrap'}>
                {'13 BANK:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {characterInfo.finances.bankAccount || 0}
              </Text>
              <Text fontSize="xs" pl={4} pr={1} whiteSpace={'nowrap'}>
                {'14 CASH:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {characterInfo.finances.cashOnHand}
              </Text>
              <Text fontSize="xs" pl={4} pr={1} whiteSpace={'nowrap'}>
                {'15 DEBT:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {characterInfo.finances.debt}
              </Text>
            </Flex>
            <Flex
              display={{ base: 'flex', sm: 'none' }}
              direction={'column'}
              alignItems={'flex-start'}
              justifyContent={'flex-end'}
              alignSelf={'flex-start'}
            >
              <Flex>
                <Text fontSize="xs" pr={1} whiteSpace={'nowrap'}>
                  {'13 BANK:'}
                </Text>
                <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                  {characterInfo.finances.bankAccount || 0}
                </Text>
              </Flex>
              <Flex>
                <Text fontSize="xs" pr={1} whiteSpace={'nowrap'}>
                  {'14 CASH:'}
                </Text>
                <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                  {characterInfo.finances.cashOnHand}
                </Text>
              </Flex>
              <Flex>
                <Text fontSize="xs" pr={1} whiteSpace={'nowrap'}>
                  {'15 DEBT:'}
                </Text>
                <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                  {characterInfo.finances.debt}
                </Text>
              </Flex>
            </Flex>
            <Image
              // position={'absolute'}
              objectFit="cover"
              opacity={0.5}
              src="https://i.imgur.com/H54NsMT.png"
              pl={20}
              pt={10}
              w={'70%'}
            />
            <Flex alignItems={'flex-end'} alignSelf={'center'}>
              <Text fontSize="xs" pr={1}>
                {'16 LUCK:'}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                {characterInfo.luck}
              </Text>
            </Flex>
          </Stack>
        </SimpleGrid>
      </CardBody>
    </Card>
  )
}

export default IDCard
