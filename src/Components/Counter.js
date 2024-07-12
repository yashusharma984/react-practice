import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        this.setState({
            count : this.state.count+1 
        })
        // console.log(this.state.count)
        // in the console value will increase by 1... but in the user-interface browser not increase...
    }
    decrement(){
        this.setState({
            count:this.state.count-1
        })
    }
    
  render() {
    return (
      <div>
        <div> count-{this.state.count}</div>
        <button onClick={()=>this.increment()}>Increment</button>
        <div>
        <button onClick={()=>this.decrement()}>Decrement</button>
        </div>
        </div>
        
    )
  }
}

export default Counter
