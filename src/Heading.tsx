import * as React from "react";

interface In {
  text: string;
}

export function Heading({ text }: In): JSX.Element {
  return <h2>{ text }</h2>;
}
