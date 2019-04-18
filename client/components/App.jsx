import React from 'react'

import { getPictures } from "../api"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  componentDidMount(){
    getPictures((err, data) => {

      let {id, width, height} = data[0]
      let url = data[0].urls.full
      this.setState({
        id,
        width, 
        height,
        url
    })
  })
  
  
 
   
  }

  render() {
    return (
      <div>
        {Object.entries(this.state).map(([key, value]) => {
          return (
            <div>
          <h2 key={key}>{key}: </h2> 
                  <p>{value}</p>
                  </div>
        )
        })}
      </div>
    );
  }
}

export default App;