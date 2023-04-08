import { Grid, GridItem } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CharacterIntroPage = () => {
  return (
    <>
      <MetaTags title="CharacterIntro" description="CharacterIntro page" />

      <Grid
        h="100vh"
        templateColumns="repeat(12, minmax(0, 1fr))"
        templateRows="repeat(12, minmax(0, 1fr))"
        gap={4}
      >
        <GridItem
          colSpan={{ base: '12', md: '6', lg: '3' }}
          rowSpan={{ base: '2', md: '3', lg: '4' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          MugShot
        </GridItem>
        <GridItem
          colSpan={{ base: '12', md: '6' }}
          rowSpan={{ base: '2', md: '3', lg: '6' }}
          colStart={{ base: '1', md: '7', lg: '4' }}
          rowStart={{ base: '3', md: '1', lg: '1' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          Chatacter Backstory: Inspired by Bio
        </GridItem>
        <GridItem
          colSpan={{ base: '12', lg: '3' }}
          rowSpan={{ base: '1', lg: '2' }}
          rowStart={{ base: '5', md: '6', lg: '5' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          Buffs/Debuffs
        </GridItem>
        <GridItem
          colSpan={{ base: '12', lg: '9' }}
          rowSpan={{ base: '2', lg: '3' }}
          rowStart={{ base: '6', md: '4', lg: '7' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          Starting Info
        </GridItem>
        <GridItem
          colSpan={{ base: '12', lg: '9' }}
          rowSpan={{ base: '1', lg: '3' }}
          rowStart={{ base: '8', md: '7' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          Current Plot Point
        </GridItem>
        <GridItem
          colSpan={{ base: '12', md: '6', lg: '3' }}
          rowSpan={{ base: '3', md: '6', lg: '6' }}
          rowStart={{ base: '10', md: '9', lg: '1' }}
          colStart={{ base: '1', md: '7', lg: '10' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          Starting Locations
        </GridItem>
        <GridItem
          colSpan={{ base: '12', md: '6', lg: '3' }}
          rowSpan={{ base: '1', md: '6', lg: '6' }}
          rowStart={{ base: '9', md: '9', lg: '7' }}
          colStart={{ base: '1', md: '1', lg: '10' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          First News
        </GridItem>
      </Grid>
    </>
  )
}

export default CharacterIntroPage
