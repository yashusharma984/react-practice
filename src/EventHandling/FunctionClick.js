import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button Clicked')
    }
  return (
    <div>
      <button onClick={clickHandler}>Function Component</button>
    </div>
  )
}

export default FunctionClick
