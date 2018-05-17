import * as React from 'react';
import * as ReactDOM from 'react-dom';

class AppComponent extends React.Component {
  public render(): JSX.Element {
    return <div>
      <h2>And I'm React</h2>
    </div>;
  }
}

ReactDOM.render(
  <AppComponent/>,
  document.getElementById('app-root')
);
