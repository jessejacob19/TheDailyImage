import React, { Component } from "react";
import { directive } from "@babel/types";

class ImagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(1111, this.props);
    return (
      <div className="image">
        <img
          src={this.props.imageData.imageLink}
          height={this.props.imageData.height}
          width={this.props.imageData.width}
          alt=""
        />
      </div>
    );
  }
}

export default ImagePage;
