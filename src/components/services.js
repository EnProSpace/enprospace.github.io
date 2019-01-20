import React from "react";
import products from "./../products.json";

import "./../styles/services.css"

export default class Services extends React.Component {
  render() {
    let components = [];
    for (let el in products) {
      components.push(<div id={el} className="product" key={el} onClick={() => alert(el)}>
        <img width="256" height="144" src={products[el].img} />
        <span style={{
          fontSize: "25pt"
        }}>{products[el].name}</span><br />
        <span style={{
          fontSize: "15pt"
        }}>{products[el].microText}</span><br/><br/>
        <button>
          {products[el].buttonText}
        </button>
      </div>)
    }
    return <div id="services">
      {components}
    </div >
  }
}