export const schema = gql`
  type Region {
    id: Int!
    name: String!
    description: String!
    control: String
    cities: [City]!
    game: Game!
    gameId: Int!
    createdAt: DateTime!
  }

  type Query {
    regions: [Region!]! @requireAuth
    region(id: Int!): Region @requireAuth
  }

  input CreateRegionInput {
    name: String!
    description: String!
    control: String
    gameId: Int!
  }

  input UpdateRegionInput {
    name: String
    description: String
    control: String
    gameId: Int
  }

  type Mutation {
    createRegion(input: CreateRegionInput!): Region! @requireAuth
    updateRegion(id: Int!, input: UpdateRegionInput!): Region! @requireAuth
    deleteRegion(id: Int!): Region! @requireAuth
  }
`
