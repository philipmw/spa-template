import * as React from 'react';

interface IProps {
  text: string;
}

export default class Heading extends React.Component<IProps> {
  public render(): JSX.Element {
    return <h2>{ this.props.text }</h2>;
  }
}
