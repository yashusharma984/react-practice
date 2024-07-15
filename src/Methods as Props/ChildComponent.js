import React from 'react'

function ChildComponent(props) {
  return (
    <div>

      {/* <button onClick={props.greetHandler}> Greet Parent</button> */}

      {/* Arrow function method  to access the component using props in parent components*/}
      <button onClick={()=>props.greetHandler('Child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
