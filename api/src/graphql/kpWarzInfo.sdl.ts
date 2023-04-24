export const schema = gql`
  type Game {
    id: Int!
    name: String!
    description: String!
    currentRegionId: Int!
    regions: [Region]!
    character: Character!
    createdAt: DateTime!
    startLocation: String!
    currentCity: City!
    currentCityId: Int!
    currentDays: Int!
    maxDays: Int!
    timeOfDay: String!
    lostItems: [Item]!
    character: Character!
    characterId: Int!
    uerId: Int!
  }

  type Query {
    getGameInfo(id: Int!): Game @requireAuth
  }
`
