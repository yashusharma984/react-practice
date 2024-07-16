import React from 'react'

// wec call details from PersonList...
function Person({person}) {
  return (
    <div>
       <h2>I am {person.name}. I am {person.age} years old. I know {person.skills}</h2>
    </div>
  )
}

export default Person