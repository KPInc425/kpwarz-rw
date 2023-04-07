export const schema = gql`
  type Character {
    id: Int!
    name: String!
    bio: String!
    description: String!
    user: User!
    userId: Int!
    health: Int!
    maxHealth: Int!
    currentItems: Int!
    maxItems: Int!
    luck: Int!
    storageType: String!
    finances: [CharacterFinances]!
    items: [Item]!
    transportation: [Transport]!
    game: Game
    createdAt: DateTime!
  }

  type Query {
    characters: [Character!]! @requireAuth
    character(id: Int!): Character @requireAuth
  }

  input CreateCharacterInput {
    name: String!
    bio: String!
    description: String!
    userId: Int!
    health: Int!
    maxHealth: Int!
    currentItems: Int!
    maxItems: Int!
    luck: Int!
    storageType: String!
  }

  input UpdateCharacterInput {
    name: String
    bio: String
    description: String
    userId: Int
    health: Int
    maxHealth: Int
    currentItems: Int
    maxItems: Int
    luck: Int
    storageType: String
  }

  type Mutation {
    createCharacter(input: CreateCharacterInput!): Character! @requireAuth
    updateCharacter(id: Int!, input: UpdateCharacterInput!): Character!
      @requireAuth
    deleteCharacter(id: Int!): Character! @requireAuth
  }
`
