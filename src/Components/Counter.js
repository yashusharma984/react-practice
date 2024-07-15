import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    // cal increment 5 times... it give callback function value log5 times and console value is 5 seprate print
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    increment(){
    //     this.setState(
    //         {
    //         count : this.state.count+1 
    //     },
    //     // arrow function 
    //     ()=>{ // this will update the value in console and it render in browser...
    //         console.log('callback function',this.state.count)
    //     }
    //     )
    //     console.log('inc.value' ,this.state.count)
    //     // in the console value will increase by 1... but in the user-interface browser not increase...
    // }

     this.setState((prevState, props) =>({
        count : prevState.count +1
     }))
     console.log(this.state.count)}



   decrementFive(){
    this.decrement()
    this.decrement()
    this.decrement()
    this.decrement()
    this.decrement()
   }


   // in the case of decrement function we use setState method to update count value and arrow function to call callback function .  callback function call it log times.. and after callback function console will print

    // decrement(){
    //     this.setState({
    //         count:this.state.count-1
    //     },  // arrow function use in below to call callback function..
    //     ()=>{
    //         console.log('callback function', this.state.count)
    //     }
    //     )
    //     console.log('dec. value' ,this.state.count)
    // }
    
  render() {
    return (
      <div>
        <div> count-{this.state.count}</div>
        <button onClick={()=>this.incrementFive()}>Increment</button>
        <div>
        <button onClick={()=>this.decrementFive()}>Decrement</button>
        </div>
        </div>
        
    )
  }
}

export default Counter
