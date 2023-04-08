export const schema = gql`
  type AvailableTransport {
    id: Int!
    name: String!
    description: String!
    speed: Int!
    price: Int!
    storage: Int!
    createdAt: DateTime!
  }

  type Query {
    availableTransports: [AvailableTransport!]! @requireAuth
    availableTransport(id: Int!): AvailableTransport @requireAuth
  }

  input CreateAvailableTransportInput {
    name: String!
    description: String!
    speed: Int!
    price: Int!
    storage: Int!
  }

  input UpdateAvailableTransportInput {
    name: String
    description: String
    speed: Int
    price: Int
    storage: Int
  }

  type Mutation {
    createAvailableTransport(
      input: CreateAvailableTransportInput!
    ): AvailableTransport! @requireAuth
    updateAvailableTransport(
      id: Int!
      input: UpdateAvailableTransportInput!
    ): AvailableTransport! @requireAuth
    deleteAvailableTransport(id: Int!): AvailableTransport! @requireAuth
  }
`
