// TODO change variables, not doing matchups or tech
const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    title: String
    author: String
    coverImage(s): XXX
    link: XXX
  }

// Auth means authentication
  
  type Auth {
    token: Id!
    user: User
  }

  type Mutation {
    login(email: String! password: String!): Auth
    addUser(username: String! email: String! password: String!): Auth
    saveBook(bookData: bookInput!): User
    removeBook(bookId: String!): User
  }

  input 

// does order matter?

  type Query {
    me: User
  }

`;

module.exports = typeDefs;