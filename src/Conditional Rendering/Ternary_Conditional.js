import React, { Component } from 'react'

 class Ternary_Conditional extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : true
    }
  }
  
  render() {
    return (this.state.isLoggedIn ? <div>Welcome Yash</div> : <div>Welcome Guest</div>)
    }
}

export default Ternary_Conditional
