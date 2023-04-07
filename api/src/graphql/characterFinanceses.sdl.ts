export const schema = gql`
  type CharacterFinances {
    id: Int!
    character: Character!
    characterId: Int!
    cashOnHand: Int!
    bankAccount: Int!
    debt: Int!
    createdAt: DateTime!
  }

  type Query {
    characterFinanceses: [CharacterFinances!]! @requireAuth
    characterFinances(id: Int!): CharacterFinances @requireAuth
  }

  input CreateCharacterFinancesInput {
    characterId: Int!
    cashOnHand: Int!
    bankAccount: Int!
    debt: Int!
  }

  input UpdateCharacterFinancesInput {
    characterId: Int
    cashOnHand: Int
    bankAccount: Int
    debt: Int
  }

  type Mutation {
    createCharacterFinances(
      input: CreateCharacterFinancesInput!
    ): CharacterFinances! @requireAuth
    updateCharacterFinances(
      id: Int!
      input: UpdateCharacterFinancesInput!
    ): CharacterFinances! @requireAuth
    deleteCharacterFinances(id: Int!): CharacterFinances! @requireAuth
  }
`
