const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    userName: String!
    createdAt: String!
  }
  type Employee {
    id: ID!
    name: String!
    description: String!
    title: String!
    company: String!
  }
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    userName: String!
  }
  input RegisterInput {
    userName: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postID: ID!): Post
    getEmployees: [Employee]
    getCompanyEmployees(filter: String): [Employee]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    createPost(body: String!): Post!
    deletePost(postID: ID!): String!
  }
`;
