export const schema = gql`
  type AvailableItems {
    id: Int!
    name: String!
    description: String!
    type: String!
    ability: String!
    basePrice: Int!
    chance: Int!
    createdAt: DateTime!
  }

  type Query {
    availableItemses: [AvailableItems!]! @requireAuth
    availableItems(id: Int!): AvailableItems @requireAuth
  }

  input CreateAvailableItemsInput {
    name: String!
    description: String!
    type: String!
    basePrice: Int!
    chance: Int!
    ability: String!
  }

  input UpdateAvailableItemsInput {
    name: String
    description: String
    type: String
    basePrice: Int
    chance: Int
    ability: String
  }

  type Mutation {
    createAvailableItems(input: CreateAvailableItemsInput!): AvailableItems!
      @requireAuth
    updateAvailableItems(
      id: Int!
      input: UpdateAvailableItemsInput!
    ): AvailableItems! @requireAuth
    deleteAvailableItems(id: Int!): AvailableItems! @requireAuth
  }
`
