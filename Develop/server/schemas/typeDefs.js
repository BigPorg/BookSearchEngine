// TODO change variables, not doing matchups or tech
const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    title: String
    author: String
    coverImage: String
    link: String
    synopsis: String
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String! password: String!): Auth
    addUser(username: String! email: String! password: String!): Auth
    saveBook(bookData: bookInput!): User
    removeBook(bookId: String!): User
  } 

  type Query {
    me: User
  }

`;

module.exports = typeDefs;