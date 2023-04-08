export const schema = gql`
  type TestStuff {
    id: Int!
    name: String!
    background: Background!
    createdAt: DateTime!
  }

  enum Background {
    Plebian
    Suburban_Kid
    Affluenza
  }

  type Query {
    testStuffs: [TestStuff!]! @requireAuth
    testStuff(id: Int!): TestStuff @requireAuth
  }

  input CreateTestStuffInput {
    name: String!
    background: Background!
  }

  input UpdateTestStuffInput {
    name: String
    background: Background
  }

  type Mutation {
    createTestStuff(input: CreateTestStuffInput!): TestStuff! @requireAuth
    updateTestStuff(id: Int!, input: UpdateTestStuffInput!): TestStuff!
      @requireAuth
    deleteTestStuff(id: Int!): TestStuff! @requireAuth
  }
`
