import { render } from "react-dom";
import React from "react"

import Header from "./components/header"

class MainComponent extends React.Component{
  render(){
    return <div>
      <Header/>
    </div>
  }
}

render(<MainComponent/>,document.getElementById("app"))