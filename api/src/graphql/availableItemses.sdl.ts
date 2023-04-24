export const schema = gql`
  type AvailableItems {
    id: Int!
    name: String!
    description: String!
    type: ItemType!
    ability: String!
    basePrice: Int!
    chance: Int!
    createdAt: DateTime!
  }

  enum ItemType {
    Food
    Weapon
    Clothing
    Medicine
    Drug
    Misc
  }

  type Query {
    availableItemses: [AvailableItems!]! @requireAuth
    availableItems(id: Int!): AvailableItems @requireAuth
  }

  input CreateAvailableItemsInput {
    name: String!
    description: String!
    type: ItemType!
    ability: String!
    basePrice: Int!
    chance: Int!
  }

  input UpdateAvailableItemsInput {
    name: String
    description: String
    type: ItemType
    ability: String
    basePrice: Int
    chance: Int
  }

  type Mutation {
    createAvailableItems(input: CreateAvailableItemsInput!): AvailableItems!
      @requireAuth
    updateAvailableItems(
      id: Int!
      input: UpdateAvailableItemsInput!
    ): AvailableItems! @requireAuth
    deleteAvailableItems(id: Int!): AvailableItems! @requireAuth
  }
`
