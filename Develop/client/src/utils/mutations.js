// TODO LOGIN_USER will execute logInUser mutation, setting up Apollo server
// ADD_USER will execute addUser
// SAVE_BOOK will execute saveBook
// REMOVE_BOOK will execture removeBook
import { gql } from '@apollo/client';
// XXX Need to change variable names
export const LOGIN_USER = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const ADD_USER = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const SAVE_BOOK = gql`
mutation
`;

export const REMOVE_BOOK = gql`
mutation
`;