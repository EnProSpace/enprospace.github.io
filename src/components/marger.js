import React from "react";

export default class Marger extends React.Component {
  render(){
    return <div style={{
      "height": this.props.height,
      "width": "20px"
    }}></div>
  }
}