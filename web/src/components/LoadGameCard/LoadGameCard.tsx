import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'

const LoadGameCard = ({ game }) => {
  const handleClick = (gameId) => {
    console.log('clicked')
    navigate(routes.kpwarzGame({ id: gameId }))
  }
  return (
    <>
      <Card boxShadow={'dark-lg'} borderRadius={'1rem'} fontWeight={500}>
        <CardHeader
          textAlign={'center'}
          borderRadius={'1rem 1rem 0 0'}
          border={'2px outset rgba(0,0,0,0.25)'}
          bg={'rgba(0,0,0,0.25)'}
        >
          <Text fontSize={'2xl'} fontWeight={700}>
            {game.name}
          </Text>
        </CardHeader>
        <CardBody
          textAlign={{ base: 'center', sm: 'left' }}
          bgGradient={
            'linear-gradient(180deg, rgba(66,63,85,0.25) 55%, rgba(0,0,0,0.25))'
          }
        >
          <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }}>
            <GridItem>
              <Container>
                <Badge variant={'outline'}>Description</Badge>
                <Text>{game.description}</Text>
              </Container>
            </GridItem>
            <GridItem>
              <Container>
                <Badge variant={'outline'}>Origin</Badge>
                <Text>{game.startLocation}</Text>
              </Container>
            </GridItem>
            <GridItem>
              <Container>
                <Badge variant={'outline'}>CurrentDay</Badge>
                <Text>{game.currentDay}</Text>
              </Container>
            </GridItem>
            <GridItem>
              <Container>
                <Badge variant={'outline'}>MaxDays</Badge>
                <Text>{game.maxDays}</Text>
              </Container>
            </GridItem>
            <GridItem>
              <Container>
                <Badge variant={'outline'}>TimeOfDay</Badge>
                <Text>{game.timeOfDay}</Text>
              </Container>
            </GridItem>

            {game.regions.map((region) => (
              <GridItem overflowY={'auto'}>
                <Container>
                  <Badge variant={'outline'}>Regions</Badge>
                  <Text key={region.id}>{region.name}</Text>
                </Container>
              </GridItem>
            ))}
            <GridItem>
              <Container>
                <Badge variant={'outline'}>City</Badge>
                <Text>{game.currentCity.name}</Text>
              </Container>
            </GridItem>
            <GridItem>
              <Container>
                <Badge variant={'outline'}>Character</Badge>
                <Text>{game.character.name}</Text>
              </Container>
            </GridItem>
          </Grid>
        </CardBody>
        <CardFooter
          border={'2px outset rgba(0,0,0,0.25)'}
          borderRadius={'0 0 1rem 1rem'}
          bg={'rgba(0,0,0,0.25)'}
          alignItems={'center'}
        >
          <Container>
            <Badge variant={'outline'}>Created</Badge>
            <Text>{game.createdAt}</Text>
          </Container>
          <Button colorScheme="green" onClick={() => handleClick(game.id)}>
            Load
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default LoadGameCard
