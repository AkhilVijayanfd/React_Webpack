
// import React from "react";

// type AppProps = { num: number };

// export const App = ( {num}: AppProps ) => <h2> Welcome to React TypeScript Num: {num} </h2>;

import * as React from "react";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export  const App = (props: HelloWorldProps) => (
  <h1>
    Hi {props.userName} from React! Welcome to {props.lang}!
  </h1>
);