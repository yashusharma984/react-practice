import React, { Component } from 'react'

 class Classclick extends Component {

    ClickHandler(){
        console.log('Clicked  the Button')
    }
  render() {
    return (
      <div>
         <button onClick={this.ClickHandler}>Class Component</button>
      </div>
    )
  }
}
export default Classclick
