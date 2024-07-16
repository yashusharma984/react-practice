import React from 'react'
// import Person from './Person'

function NameList() {
  const names = ['Bruce' , 'clark','Diana']
  // const persons = [
  //   { 
  //     id:1,
  //     Name: 'yash',
  //      age: 30,
  //      skills : 'Angular'
  //   },{
  //     id:2,
  //     Name: 'shivam',
  //      age: 25,
  //      skills : 'react.js'
  //   },{
  //     id:3,
  //     Name: 'vikki',
  //      age: 20,
  //      skills : 'html'
  //   }
  // ]
   const namelist =names.map((name,index,) => <h2 key={index}>{index} {name}</h2>)
   return <div>{namelist}</div>
  }

export default NameList
