export const schema = gql`
  type Item {
    id: Int!
    name: String!
    quantity: Int!
    price: Int!
    quality: String
    ability: String
    description: String!
    imgURL: String
    type: String!
    uses: Int
    character: Character
    characterId: Int
    game: Game!
    gameId: Int!
    scale: String!
    createdAt: DateTime!
  }

  type Query {
    items: [Item!]! @requireAuth
    item(id: Int!): Item @requireAuth
  }

  input CreateItemInput {
    name: String!
    quantity: Int!
    price: Int!
    quality: String
    ability: String
    description: String!
    type: String!
    uses: Int
    scale: String!
    characterId: Int!
    gameId: Int!
  }

  input UpdateItemInput {
    name: String
    quantity: Int
    price: Int
    quality: String
    ability: String
    description: String
    type: String
    scale: String
    uses: Int
    characterId: Int
    gameId: Int
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item! @requireAuth
    updateItem(id: Int!, input: UpdateItemInput!): Item! @requireAuth
    deleteItem(id: Int!): Item! @requireAuth
  }
`
