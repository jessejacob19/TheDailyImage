import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ImageButton from "./ImageButton";
import ImagePage from "./ImagePage";
import LoadingBar from "./LoadingBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <ImageButton />
        <ImagePage />
        <LoadingBar />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
