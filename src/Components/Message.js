import React, { Component } from "react";
 // example of state  in class component
class Message extends Component{

    constructor(){
        super()
        this.state={
            Message:'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            Message : 'Thankyou for subscribing'
        })
    }

    render() {
        return(
                <div>
     <h1>{this.state.Message}</h1>
      <button onClick={()=>this.changeMessage()} >Subscribe</button>         
                </div>
     ) 
    }
}
export default Message;