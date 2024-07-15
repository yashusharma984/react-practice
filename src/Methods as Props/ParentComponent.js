import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


// in this we are create method in which we call child component by using parent component...this is acheive by using props


 class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    

    greetParent(childName){ 
        alert  (`Hello ${this.state.parentName} from  ${childName} `)
    }

  render() {
    return (
      <div>
        <ChildComponent  greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
