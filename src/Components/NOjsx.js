import React from "react";

// const NOjsx = ()=>{
//     return React.createElement('div className= 'dummyClass', null ,<h1>Hello here no jsx used here</h1>)
// }


// with new method of no use of JSX....
const NOjsx=()=>{
return React.createElement(
    'div',   // parameter 
    {id: 'hello', className:'dummyClass'}, // it give the div has a id of  ... 3rd  use for value 
    React.createElement('h1',null,'hello yash here ')
)
}
export default NOjsx;