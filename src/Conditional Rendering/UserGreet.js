import React, { Component } from 'react'

 class UserGreet extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          isloggedIn: true
      }
    }
    
  render() {

   // 4th Sort circuit operator example 
     return this.state.isloggedIn && <div>Welcome Yash</div>



    // 3rd Ternary Conditional operator example...
    // return (this.state.isloggedIn ?
    //     (<div>Welcome Yash</div>) :
    //     (<div>Welcome Guest</div>)
    //     )

  //2. Element variable example

    // let message 
    // if(this.state.isloggedIn){
    //     message =<div>Welcome Yash</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return<div>{message}</div>
 
    // 1. if else example

    // if(this.state.isloggedIn){
    //     return <div> Welcome Yash </div>
    // }else{
    //     return <div> Welcome Guest </div>
    // }
//     return (
//       <div>
//         <div>Welcome Yash</div>
//         <div>Welcome Guest</div>
//       </div>
//     )
   }
 }

export default UserGreet

