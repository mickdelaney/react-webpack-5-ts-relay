import React, { FunctionComponent } from "react";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { AppPersonQuery } from "./__generated__/AppPersonQuery.graphql";

const { Suspense } = React;

const PeronNameQuery = graphql`
  query AppPersonQuery {
    people {
      name
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, PeronNameQuery, {
  /* query variables */
});

export const App: FunctionComponent<any> = (props: any) => {
  const data = usePreloadedQuery<AppPersonQuery>(
    PeronNameQuery,
    props.preloadedQuery
  );

  return (
    <div>
      <h3>Date : {new Date().toDateString()}</h3>
      <h4>people: {data.people.length}</h4>
    </div>
  );
};

function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
