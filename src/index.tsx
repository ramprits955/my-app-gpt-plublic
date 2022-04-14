import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApollo } from "services/graphql";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "redux/store";
import "styles/global.css";

import reportWebVitals from "./reportWebVitals";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const apolloClient = initializeApollo();

root.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </StrictMode>
);

reportWebVitals();
