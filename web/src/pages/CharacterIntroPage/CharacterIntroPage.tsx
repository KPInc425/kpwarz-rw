// import { Grid, GridItem } from '@chakra-ui/react'

import { useState } from 'react'

import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Menu,
  MenuButton,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorMode,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CharacterIntroCell from 'src/components/CharacterIntroCell'

const CharacterIntroPage = ({ id }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [introView, setIntroView] = useState(1)

  const handleClick = (view) => {
    console.log('view', view)
    setIntroView(view)
  }
  return (
    <>
      <MetaTags title="CharacterIntro" description="CharacterIntro page" />

      <div>
        {/* {JSON.stringify(characterIntro)} */}
        <Grid
          h="100vh"
          templateColumns="repeat(12, minmax(0, 1fr))"
          templateRows="repeat(12, minmax(0, 1fr))"
          gap={2}
        >
          <GridItem
            colSpan={{ base: '12', lg: '2' }}
            rowSpan={{ base: '6', lg: '12' }}
            rowStart={{ base: '7', lg: '1' }}
            border="4px solid rgb(184, 182, 182)"
            borderRadius="12px"
          >
            <Heading textAlign={'center'}>Character Intro</Heading>
            <Stack px={2}>
              <Button onClick={() => handleClick(1)} colorScheme="green">
                Mug Shot
              </Button>
              <Button onClick={() => handleClick(2)} colorScheme="green">
                Character Backstory
              </Button>
              <Button onClick={() => handleClick(3)} colorScheme="green">
                Plot Thickens
              </Button>
              <Button onClick={() => handleClick(4)} colorScheme="green">
                Buffs/Debuffs
              </Button>
              <Button onClick={() => handleClick(5)} colorScheme="green">
                Starting Info
              </Button>
              <Button onClick={() => handleClick(6)} colorScheme="green">
                Breaking Newz!
              </Button>
              <Button onClick={() => handleClick(7)} colorScheme="green">
                Locations
              </Button>
              <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
                Toggle Mode
              </Button>
            </Stack>
          </GridItem>
          {introView === 1 && (
            <GridItem
              colSpan={{ base: '12', lg: '10' }}
              rowSpan={{ base: '6', lg: '12' }}
              colStart={{ base: '1', lg: '3' }}
              rowStart={{ base: '1', lg: '1' }}
              border="4px solid rgb(184, 182, 182)"
              borderRadius="12px"
            >
              MugShot (Coming Soon)
            </GridItem>
          )}
          {introView === 2 && (
            <GridItem
              colSpan={{ base: '12', lg: '10' }}
              rowSpan={{ base: '6', lg: '12' }}
              colStart={{ base: '1', lg: '3' }}
              rowStart={{ base: '1', lg: '1' }}
              border="4px solid rgb(184, 182, 182)"
              borderRadius="12px"
            >
              Chatacter Backstory: Inspired by Bio (Coming Soon)
            </GridItem>
          )}
          {introView === 3 && (
            <GridItem
              colSpan={{ base: '12', lg: '10' }}
              rowSpan={{ base: '6', lg: '12' }}
              colStart={{ base: '1', lg: '3' }}
              rowStart={{ base: '1', lg: '1' }}
              border="4px solid rgb(184, 182, 182)"
              borderRadius="12px"
            >
              Current Plot Point (Coming Soon)
            </GridItem>
          )}
          {introView === 4 && (
            <GridItem
              colSpan={{ base: '12', lg: '10' }}
              rowSpan={{ base: '6', lg: '12' }}
              colStart={{ base: '1', lg: '3' }}
              rowStart={{ base: '1', lg: '1' }}
              border="4px solid rgb(184, 182, 182)"
              borderRadius="12px"
            >
              Buffs and Debuffs (Coming Soon)
            </GridItem>
          )}
          {introView === 5 && (
            <GridItem
              colSpan={{ base: '12', lg: '10' }}
              rowSpan={{ base: '6', lg: '12' }}
              colStart={{ base: '1', lg: '3' }}
              rowStart={{ base: '1', lg: '1' }}
              border="4px solid rgb(184, 182, 182)"
              borderRadius="12px"
            >
              <CharacterIntroCell id={Number(id)} />
            </GridItem>
          )}
          {introView === 6 && (
            <GridItem
              colSpan={{ base: '12', lg: '10' }}
              rowSpan={{ base: '6', lg: '12' }}
              colStart={{ base: '1', lg: '3' }}
              rowStart={{ base: '1', lg: '1' }}
              border="4px solid rgb(184, 182, 182)"
              borderRadius="12px"
            >
              First News (Coming Soon)
            </GridItem>
          )}
          {introView === 7 && (
            <GridItem
              colSpan={{ base: '12', lg: '10' }}
              rowSpan={{ base: '6', lg: '12' }}
              colStart={{ base: '1', lg: '3' }}
              rowStart={{ base: '1', lg: '1' }}
              border="4px solid rgb(184, 182, 182)"
              borderRadius="12px"
            >
              Starting Locations
            </GridItem>
          )}
        </Grid>
      </div>
    </>
  )
}

export default CharacterIntroPage

// <GridItem
// colSpan={{ base: '12', lg: '9' }}
// rowSpan={{ base: '2', lg: '3' }}
// rowStart={{ base: '6', md: '4', lg: '7' }}
// border="4px solid rgb(184, 182, 182)"
// borderRadius="12px"
// >
// <CharacterIntroCell id={Number(id)} />
// </GridItem>
// <GridItem
// colSpan={{ base: '12', lg: '9' }}
// rowSpan={{ base: '1', md: 2, lg: '3' }}
// rowStart={{ base: '8', md: '7' }}
// border="4px solid rgb(184, 182, 182)"
// borderRadius="12px"
// >
// <h1>Current Plot Point (Coming Soon)</h1>
// </GridItem>
// <GridItem
// colSpan={{ base: '12', md: '6', lg: '3' }}
// rowSpan={{ base: '3', md: '6', lg: '6' }}
// rowStart={{ base: '10', md: '9', lg: '1' }}
// colStart={{ base: '1', md: '7', lg: '10' }}
// border="4px solid rgb(184, 182, 182)"
// borderRadius="12px"
// >
// Starting Locations
// </GridItem>
// <GridItem
// colSpan={{ base: '12', md: '6', lg: '3' }}
// rowSpan={{ base: '1', md: '6', lg: '6' }}
// rowStart={{ base: '9', md: '9', lg: '7' }}
// colStart={{ base: '1', md: '1', lg: '10' }}
// border="4px solid rgb(184, 182, 182)"
// borderRadius="12px"
// >
// First News (Coming Soon)
// </GridItem> */}
