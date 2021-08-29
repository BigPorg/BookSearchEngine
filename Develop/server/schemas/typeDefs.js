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
    description: String
  }
  
  type Auth {
    token: ID!
    user: User
  }

  input bookInput {
    bookId: String
    title: String
    author: String
    coverImage: String
    link: String
    description: String
 
  }

  type Query {
    me: User
  }
  
  type Mutation {
    login(email: String! password: String!): Auth
    addUser(username: String! email: String! password: String!): Auth
    saveBook(bookData: bookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;