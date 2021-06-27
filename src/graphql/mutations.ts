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
export const CREATE_TICKET = gql`
      mutation createTicket($title: String! $description: String){
            createTicket(ticket:{title:$title description:$description}) {
                  id
                  title
                  description
                  status
            }
      }
`;
