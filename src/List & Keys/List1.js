import React from 'react'
import List2 from './List2'

function List1() {

  const details = [
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

  ]  //  this below lines means that List2 will take the details of list 1....
   const list1 =details.map(detail => <List2 key = {detail.id }  detail = {detail}/>)
  return <div>{list1}</div>
}

export default List1
