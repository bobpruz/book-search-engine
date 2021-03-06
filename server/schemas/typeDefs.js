const { gql } = require("apollo-server-express");

// create types and queries from models and controller
const typeDefs = gql`
  type User {
    _id: String
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }
  input bookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput!): User
    removeBook(bookId: String!): User
  }
 type Query {
    me: User
  }
  input bookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput!): User
    removeBook(bookId: String!): User
  }

`;

module.exports = typeDefs;
