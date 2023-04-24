export const schema = gql`
  type Game {
    id: Int!
    name: String!
    description: String!
    startLocation: String!
    currentRegionId: Int!
    currentCity: City
    currentCityId: Int
    maxDays: Int!
    currentDay: Int!
    timeOfDay: String!
    lostItems: [Item]!
    regions: [Region]!
    character: Character!
    characterId: Int!
    user: User!
    userId: Int!
    createdAt: DateTime!
  }

  type Query {
    games: [Game!]! @requireAuth
    game(id: Int!): Game @requireAuth
  }

  input CreateGameInput {
    name: String!
    description: String!
    startLocation: String!
    currentRegionId: Int!
    currentCityId: Int
    maxDays: Int!
    currentDay: Int!
    timeOfDay: String!
    characterId: Int!
    userId: Int!
  }

  input UpdateGameInput {
    name: String
    description: String
    startLocation: String
    currentRegionId: Int
    currentCityId: Int
    maxDays: Int
    currentDay: Int
    timeOfDay: String
    characterId: Int
    userId: Int
  }

  type Mutation {
    createGame(input: CreateGameInput!): Game! @requireAuth
    updateGame(id: Int!, input: UpdateGameInput!): Game! @requireAuth
    deleteGame(id: Int!): Game! @requireAuth
  }
`
