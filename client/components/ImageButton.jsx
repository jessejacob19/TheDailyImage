import React, { Component } from "react";
import { directive } from "@babel/types";

class ImageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div class="button-container">
    <a href="#" class="btn"><span>Random Image</span></a>
  </div>
  }
}

export default ImageButton;
