import React, { Component } from 'react'
import Child from './Child'

 class Parents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parents : 'shubham is a Father'
      }


      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`${this.state.parents} of ${childName}`)
    }
    
  render() {
    return (
      <div>
        <Child son={this.greetParent}/>
      </div>
    )
  }
}

export default Parents

