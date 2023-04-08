export const schema = gql`
  type AvailableRegion {
    id: Int!
    name: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    availableRegions: [AvailableRegion!]! @requireAuth
    availableRegion(id: Int!): AvailableRegion @requireAuth
  }

  input CreateAvailableRegionInput {
    name: String!
    description: String!
  }

  input UpdateAvailableRegionInput {
    name: String
    description: String
  }

  type Mutation {
    createAvailableRegion(input: CreateAvailableRegionInput!): AvailableRegion!
      @requireAuth
    updateAvailableRegion(
      id: Int!
      input: UpdateAvailableRegionInput!
    ): AvailableRegion! @requireAuth
    deleteAvailableRegion(id: Int!): AvailableRegion! @requireAuth
  }
`
