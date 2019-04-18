import React, { Component } from "react";
import { directive } from "@babel/types";

const fakeData = {
  imageLink:
    "https://i.kinja-img.com/gawker-media/image/upload/s--CWKHA2W9--/c_scale,f_auto,fl_progressive,q_80,w_800/yxeok4wpwe54cn9y05j1.jpg",
  title: "bird",
  description: "this bird has a beak"
};

class ImageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    let { imageLink, title, description } = fakeData;
    this.props.onButton(imageLink, title, description);
  }


  render() {
    return <button onClick={this.handleClick.bind(this)}>Get Image</button>;
  }
}

export default ImageButton;
