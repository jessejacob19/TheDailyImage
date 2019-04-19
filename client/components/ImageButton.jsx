import React, { Component } from "react";
import { directive } from "@babel/types";

import { getPictures } from "../api";
let randomNum = Math.floor(Math.random() * 10);
// const fakeData = {
//   imageLink:
//     "https://i.kinja-img.com/gawker-media/image/upload/s--CWKHA2W9--/c_scale,f_auto,fl_progressive,q_80,w_800/yxeok4wpwe54cn9y05j1.jpg",
//   title: "bird",
//   description: "this bird has a beak"
// };



class ImageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    // let { imageLink, title, description } = fakeData;
    // this.props.onLoading()
    let randomNum = Math.floor(Math.random() * 10);

    getPictures((err, data) => {
      let { width, height } = data[randomNum];
      let imageLink = data[randomNum].urls.full;
      this.props.onButton(imageLink, width, height);
    });
    console.log(this);
    //this.props.onButton(imageLink, title, description);
    //call api
  }

  render() {
    return <div className="button-container"onClick={this.handleClick.bind(this)}>
<a href="#" className="btn"><span>Random Image</span></a>
</div>
  }
}

export default ImageButton;
