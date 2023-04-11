export const schema = gql`
  type Service {
    id: Int!
    name: String!
    description: String!
    city: City!
    cityId: Int!
    createdAt: DateTime!
  }

  type Query {
    services: [Service!]! @requireAuth
    service(id: Int!): Service @requireAuth
  }

  input CreateServiceInput {
    name: String!
    description: String!
    cityId: Int!
  }

  input UpdateServiceInput {
    name: String
    description: String
    cityId: Int
  }

  type Mutation {
    createService(input: CreateServiceInput!): Service! @requireAuth
    updateService(id: Int!, input: UpdateServiceInput!): Service! @requireAuth
    deleteService(id: Int!): Service! @requireAuth
  }
`
