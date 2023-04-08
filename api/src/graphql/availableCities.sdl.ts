export const schema = gql`
  type AvailableCity {
    id: Int!
    name: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    availableCities: [AvailableCity!]! @requireAuth
    availableCity(id: Int!): AvailableCity @requireAuth
  }

  input CreateAvailableCityInput {
    name: String!
    description: String!
  }

  input UpdateAvailableCityInput {
    name: String
    description: String
  }

  type Mutation {
    createAvailableCity(input: CreateAvailableCityInput!): AvailableCity!
      @requireAuth
    updateAvailableCity(
      id: Int!
      input: UpdateAvailableCityInput!
    ): AvailableCity! @requireAuth
    deleteAvailableCity(id: Int!): AvailableCity! @requireAuth
  }
`
