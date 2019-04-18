import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Header from "./Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Route path="/" component={Header} />
        <Route path="/" component={Footer} />
        <div className="content">
          <p>add content paths here</p>
        </div>
      </Router>
    );
  }
}

export default App;
