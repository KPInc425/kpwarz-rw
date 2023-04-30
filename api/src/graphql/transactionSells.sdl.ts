export const schema = gql`
  type TransactionSell {
    id: Int!
    character: Character!
    characterId: Int!
    merchant: Merchant!
    merchantId: Int!
    itemName: String!
    quantity: Int!
    price: Int!
    createdAt: DateTime!
  }

  type Query {
    transactionSells: [TransactionSell!]! @requireAuth
    transactionSell(id: Int!): TransactionSell @requireAuth
  }

  input CreateTransactionSellInput {
    characterId: Int!
    merchantId: Int!
    soldItemId: Int!
    itemName: String!
    quantity: Int!
    price: Int!
  }

  input UpdateTransactionSellInput {
    characterId: Int
    merchantId: Int
    itemName: String
    quantity: Int
    price: Int
  }

  type Mutation {
    createTransactionSell(input: CreateTransactionSellInput!): TransactionSell!
      @requireAuth
    updateTransactionSell(
      id: Int!
      input: UpdateTransactionSellInput!
    ): TransactionSell! @requireAuth
    deleteTransactionSell(id: Int!): TransactionSell! @requireAuth
  }
`
