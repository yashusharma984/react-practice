import React, { Component } from 'react'

class IF_else extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn :true
      }

    }
    
  render() {
    if(this.state.isLoggedIn){
    return <div>Welcome Yash</div>
    }
    else{
        return <div>Welcome Guest</div>
    }
}
}

export default IF_else
