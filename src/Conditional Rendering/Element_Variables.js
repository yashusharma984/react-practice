import React, { Component } from 'react'

class Element_Variables extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }

    }
    
  render() {
   let message 
   if(this.state.isLoggedIn){
     message =<div>Welcome Yash</div>
   }else{
     message = <div>Welcome Guest</div>
   }
   return <div>{message}</div>
  }
}

export default Element_Variables
