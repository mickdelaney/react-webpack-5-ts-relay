/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppPersonQueryVariables = {};
export type AppPersonQueryResponse = {
    readonly people: ReadonlyArray<{
        readonly name: string;
    }>;
};
export type AppPersonQuery = {
    readonly response: AppPersonQueryResponse;
    readonly variables: AppPersonQueryVariables;
};



/*
query AppPersonQuery {
  people {
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Person",
    "kind": "LinkedField",
    "name": "people",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPersonQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppPersonQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a261cb56cc6d08e89d8ea2a0a36bfc80",
    "id": null,
    "metadata": {},
    "name": "AppPersonQuery",
    "operationKind": "query",
    "text": "query AppPersonQuery {\n  people {\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '0bdf462deda82f00630b475450afbde1';
export default node;
