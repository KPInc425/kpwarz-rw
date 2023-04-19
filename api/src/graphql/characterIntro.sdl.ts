export const schema = gql`
  type Character {
    id: Int!
    name: String!
    bio: String!
    background: String!
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
    getCharacterIntro(id: Int!): Character @skipAuth
  }
`
