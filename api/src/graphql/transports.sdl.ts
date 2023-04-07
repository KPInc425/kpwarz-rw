export const schema = gql`
  type Transport {
    id: Int!
    name: String!
    description: String!
    speed: Int!
    price: Int!
    storage: Int!
    character: Character!
    characterId: Int!
    createdAt: DateTime!
  }

  type Query {
    transports: [Transport!]! @requireAuth
    transport(id: Int!): Transport @requireAuth
  }

  input CreateTransportInput {
    name: String!
    description: String!
    speed: Int!
    price: Int!
    storage: Int!
    characterId: Int!
  }

  input UpdateTransportInput {
    name: String
    description: String
    speed: Int
    price: Int
    storage: Int
    characterId: Int
  }

  type Mutation {
    createTransport(input: CreateTransportInput!): Transport! @requireAuth
    updateTransport(id: Int!, input: UpdateTransportInput!): Transport!
      @requireAuth
    deleteTransport(id: Int!): Transport! @requireAuth
  }
`
