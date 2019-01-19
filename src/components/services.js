import React from "react";
import products from "./../products.json";

import "./../styles/services.css"

export default class Services extends React.Component {
  render() {
    let components = [];
    for(let el in products){
      components.push(<div id={el} className="product" key={el} onClick={()=>alert(el)}>
        <img width="256" height="144" src={products[el].img}/>
        {products[el].name}
      
      </div>)
    }
    return <div id="services">
      {components}    
    </div >
  }
}