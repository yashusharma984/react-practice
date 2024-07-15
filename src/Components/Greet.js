import React from "react";
import { Component } from "react";

// javascript functional component method

// function Greet(){
//     return <h1> Hello yash here</h1>
// }


// Arrow function method....

//  const Greet = ()=> <h1> Hello yash here</h1>
// export default Greet;


//  props method use...
  //  define :- props is a object an attribute which pass  the value of the parent components
  //   // you cannot assign again and again props name or value... it give you error...

// const Greet = (props) =>{
//   console.log(props)
//    props.name = "vikas";
//   return(
//     <div>
//       <h1>Hello {props.name} a.k.a {props.heroName}
//       </h1>
//     {props.children}
//     </div>
//   )
// }
   

  // Destructuring Method  1.
// const Greet = ({name , heroName})=>{
//   return(
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//     </div>
//   )
// }

// Destructuring Method  2.
const Greet = props => {
  const { name , heroName} = props
  return(
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  )
}
export default Greet;