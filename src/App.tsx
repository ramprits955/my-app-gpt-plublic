import "styles/global.css";
import { initializeApollo } from "services/graphql";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "redux/store";
import "./i18n";

import Home from "pages";

function App(): JSX.Element {
  const apolloClient = initializeApollo();
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
