import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    //   3rd method binding in the class constructor...
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    
// clickHandler(){
//     this.setState({
//         message: 'Good Bye!'
//     })
//     console.log(this)
// }

//  4th method binding in class property of Arrow function
clickHandler=()=>{
    this.setState({
        message : 'good Bye'
    })
}


  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/*1st method here...  binding  in render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Event Bound</button> */}

        {/* 2nd Method... arrow function in render method */}
        {/* <button onClick={()=>this.clickHandler()} >Arrow Event</button> */}

        {/* 3rd method .. bind in  class constructor  */}
        <button onClick={this.clickHandler} > Bind </button>

      </div>
    )
  }
}

export default EventBind
