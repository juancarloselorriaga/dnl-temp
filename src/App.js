import React from "react";

import Homepage from './pages/homepage/homepage.component'

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Homepage />
      </div>
    );
  }
}

export default App;
