import React from 'react'

function Child(props) {
  return (
    <div>
        {/* simple method */}
      {/* <button onClick={props.son}>Parent Method</button> */}
      
      {/* Arrow function  */}
      <button onClick={()=>props.son('Vikram')}> call Child Component to Parent Component</button>
    </div>
  )
}

export default Child
