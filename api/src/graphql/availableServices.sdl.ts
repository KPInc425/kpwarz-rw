export const schema = gql`
  type AvailableService {
    id: Int!
    name: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    availableServices: [AvailableService!]! @requireAuth
    availableService(id: Int!): AvailableService @requireAuth
  }

  input CreateAvailableServiceInput {
    name: String!
    description: String!
  }

  input UpdateAvailableServiceInput {
    name: String
    description: String
  }

  type Mutation {
    createAvailableService(
      input: CreateAvailableServiceInput!
    ): AvailableService! @requireAuth
    updateAvailableService(
      id: Int!
      input: UpdateAvailableServiceInput!
    ): AvailableService! @requireAuth
    deleteAvailableService(id: Int!): AvailableService! @requireAuth
  }
`
