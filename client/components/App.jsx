import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ImageButton from "./ImageButton";
import ImagePage from "./ImagePage";
import LoadingBar from "./LoadingBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      api: {
        // imageLink:
        //   "https://i.kinja-img.com/gawker-media/image/upload/s--CWKHA2W9--/c_scale,f_auto,fl_progressive,q_80,w_800/yxeok4wpwe54cn9y05j1.jpg",
        // title: "bird",
        // description: "this bird has a beak"
      },
      loading: false
    };
  }
  updateImageState(imageLink, title, description) {
    this.setState({
      api: {
        imageLink,
        title,
        description
      },
      loading:false
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
        <ImageButton onButton={this.updateImageState.bind(this)} />
        { this.state.api.imageLink && <ImagePage imageData={this.state.api} />}
        {this.state.loading && <LoadingBar />}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
