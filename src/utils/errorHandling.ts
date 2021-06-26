import { ErrorResponse } from "@apollo/client/link/error";


export const errorHandler = (error: ErrorResponse): void => {
 const { graphQLErrors, networkError } = error;
 graphQLErrors?.map(gqlError => console.error(`Gql error ${gqlError.message}`));
 if(networkError){
     console.error(`Network error: ${networkError.message}`)
 }
};