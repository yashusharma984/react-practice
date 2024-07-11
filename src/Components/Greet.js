import React from "react";
import { Component } from "react";

// javascript functional component method
// function Greet(){
//     return <h1>Hello yash here</h1>
// }


// Arrow function method....
//  const Greet = ()=><h1>Hello yash here</h1>
// export default Greet;


//  props method use...
  //  define :- props is a object an attribute which pass  the value of the parent components
const Greet = (props) =>{
  console.log(props)
  return(
    <div>
      <h1>Hello {props.name} a.k.a {props.heroName}
      </h1>
    {props.children}
    </div>
  )
}
export default Greet;