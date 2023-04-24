export const schema = gql`
  type Merchant {
    id: Int!
    name: String!
    bio: String
    description: String
    location: City
    currentItems: Int!
    maxItems: Int!
    tempermant: Int
    items: [Item]!
    createdAt: DateTime!
  }

  type Query {
    merchants: [Merchant!]! @requireAuth
    merchant(id: Int!): Merchant @requireAuth
  }

  input CreateMerchantInput {
    name: String!
    bio: String
    description: String
    currentItems: Int!
    maxItems: Int!
    tempermant: Int
  }

  input UpdateMerchantInput {
    name: String
    bio: String
    description: String
    currentItems: Int
    maxItems: Int
    tempermant: Int
  }

  type Mutation {
    createMerchant(input: CreateMerchantInput!): Merchant! @requireAuth
    updateMerchant(id: Int!, input: UpdateMerchantInput!): Merchant!
      @requireAuth
    deleteMerchant(id: Int!): Merchant! @requireAuth
  }
`
