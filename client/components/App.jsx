import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ImageButton from "./ImageButton";
import ImagePage from "./ImagePage";
import LoadingBar from "./LoadingBar";

import { getPictures } from "../api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: {},
      loading: false
    };
  }
  updateImageState(imageLink, width, height) {
    this.setState({
      api: {
        imageLink,
        width,
        height
      },
      loading: false
    });
  }

  showLoadingBar() {
    this.setState({ loading: true });
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Header />
        <ImageButton
          onButton={this.updateImageState.bind(this)}
          onLoading={this.showLoadingBar.bind(this)}
        />
        {this.state.api.imageLink && <ImagePage imageData={this.state.api} />}
        {this.state.loading && <LoadingBar />}
        {this.state.api.imageLink && <Footer />}
      </React.Fragment>
    );
  }
}

export default App;
