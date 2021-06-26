
import { gql } from '@apollo/client';


export const LOAD_TICKETS = gql`
      query {
            tickets{
                  id
                  title
                  status
                  description
            }
      }
`;