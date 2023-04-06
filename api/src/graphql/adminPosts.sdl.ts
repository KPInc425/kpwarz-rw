export const schema = gql`
  type Query {
    adminPosts: [Post!]! @requireAuth(roles: ["admin"])
    adminPost(id: Int!): Post @requireAuth(roles: ["admin"])
  }

  input CreatePostInput {
    title: String!
    body: String!
    richBody: JSON!
  }

  input UpdatePostInput {
    title: String
    body: String
    richBody: JSON
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth(roles: ["admin"])
    updatePost(id: Int!, input: UpdatePostInput!): Post!
      @requireAuth(roles: ["admin"])
    deletePost(id: Int!): Post! @requireAuth(roles: ["admin"])
  }
`
