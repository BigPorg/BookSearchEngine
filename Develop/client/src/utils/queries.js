// TODO GET ME and change vairables
import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
          _id
          username
          email
          bookCount
          savedBooks{
            bookId
            title
            author
            image
            link
            synopsis
        }

}
`