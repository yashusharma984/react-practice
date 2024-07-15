import React from 'react'

// wec call details from List2List...
// props call in list2 parameter which is [ detail ] ..
// key is not a props ...
function List2({detail ,key}) {
  return (
    //  here list2 get the details of list 1 with the help of props call in function parameter
    <div>   
  <h2>{detail.id}. I am {detail.name}. I am {detail.age} years old. I know {detail.skills}</h2>
    </div>
  )
}

export default List2
