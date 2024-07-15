import React from 'react'
import Person from './Person'

function PersonList() {

  const persons = [
   {
    id:1,
    name : 'vikas',
    age :20,
    skills : 'React'
   },
   {
    id: 2,
    name :'yash',
    age :23,
    skills : 'Angular'
   },
   {
    id :3,
    name :'shubham',
    age : 34,
    skills : 'Html'
   }

  ]
   const personList =persons.map(person => <Person person = {person}/>)
  return <div>{personList}</div>
}

export default PersonList
