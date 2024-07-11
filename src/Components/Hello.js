import React from "react";


// jsx version 

// const Hello =()=>{
//     return(
//         <div>
//             <h1>Hello  JSX VERSION used here </h1>
//         </div>
//     )
// } 

const Hello=()=>{
    return React.createElement('div',null,<h1>Hello NO JSX USED HERE</h1>)
}
export default Hello;