export const schema = gql`
  type City {
    id: Int!
    name: String!
    description: String!
    avgQuality: Int
    avgPrice: Int!
    minQuantity: Int!
    maxQuantity: Int!
    authorityPresence: Int
    region: Region!
    regionId: Int!
    services: [Service]!
    localBoss: String!
    createdAt: DateTime!
    merchant: Merchant
    merchantId: Int
    game: Game
    gameId: Int
  }

  type Query {
    cities: [City!]! @requireAuth
    city(id: Int!): City @requireAuth
  }

  input CreateCityInput {
    name: String!
    description: String!
    avgQuality: Int
    avgPrice: Int!
    minQuantity: Int!
    maxQuantity: Int!
    localBoss: String
    authorityPresence: Int
    regionId: Int!
    gameId: Int!
    merchantId: Int
  }

  input UpdateCityInput {
    name: String
    description: String
    avgQuality: Int
    avgPrice: Int
    minQuantity: Int
    maxQuantity: Int
    localBoss: String
    authorityPresence: Int
    regionId: Int
  }

  type Mutation {
    createCity(input: CreateCityInput!): City! @requireAuth
    updateCity(id: Int!, input: UpdateCityInput!): City! @requireAuth
    deleteCity(id: Int!): City! @requireAuth
  }
`
