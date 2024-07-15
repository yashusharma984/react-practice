import React, { Component } from 'react'

class Sort_circuit_operator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    return this.state.isLoggedIn && <div>Welcome Yash</div>
    }
}

export default Sort_circuit_operator
