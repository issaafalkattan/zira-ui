import React from "react";
import { onError } from "@apollo/client/link/error";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider, 
  HttpLink,
  from,
} from "@apollo/client";
import { errorHandler } from "./utils";
import HomePage from "./components/HomePage/HomePage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "antd/dist/antd.css";

const errorLink = onError(errorHandler);

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000" })]);

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={apolloClient}>
      <DndProvider backend={HTML5Backend}>
        <HomePage />
      </DndProvider>
    </ApolloProvider>
  );
};

export default App;
