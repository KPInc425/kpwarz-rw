export const schema = gql`
  type TransactionBuy {
    id: Int!
    character: Character!
    characterId: Int!
    itemName: String!
    merchant: Merchant!
    merchantId: Int!
    quantity: Int!
    price: Int!
    createdAt: DateTime!
  }

  type Query {
    transactionBuys: [TransactionBuy!]! @requireAuth
    transactionBuy(id: Int!): TransactionBuy @requireAuth
  }

  input CreateTransactionBuyInput {
    merchantId: Int!
    characterId: Int!
    boughtItemId: Int!
    itemName: String!
    quantity: Int!
    price: Int!
  }

  input UpdateTransactionBuyInput {
    characterId: Int
    merchantId: Int
    itemName: String!
    quantity: Int
    price: Int
  }

  type Mutation {
    createTransactionBuy(input: CreateTransactionBuyInput!): TransactionBuy!
      @requireAuth
    updateTransactionBuy(
      id: Int!
      input: UpdateTransactionBuyInput!
    ): TransactionBuy! @requireAuth
    deleteTransactionBuy(id: Int!): TransactionBuy! @requireAuth
  }
`
