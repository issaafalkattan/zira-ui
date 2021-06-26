import { gql } from '@apollo/client';


export const UPDATE_STATUS = gql`
      mutation updateTicketStatus($id: String! $status: TicketStatus!){
            updateTicketStatus(id: $id, status: $status){
                  id
                  description
                  title
                  status
            }
      }
`;