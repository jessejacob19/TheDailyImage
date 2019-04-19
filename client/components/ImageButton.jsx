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
<<<<<<< HEAD
    return <div class="button-container">
    <a href="#" class="btn"><span>Random Image</span></a>
  </div>
||||||| merged common ancestors
    return <p>image button is here</p>;
=======
    return <button onClick={this.handleClick.bind(this)}>Get Image</button>;
>>>>>>> 8e54d5dc9c3e93454f71eaaa75372c10b0738cf5
  }
}

export default ImageButton;
