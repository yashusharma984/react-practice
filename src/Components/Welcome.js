import React , {Component} from "react";
class Welcome extends Component{
    render() {
     const{name , heroName} = this.props
     return(
     <h1>
        Welcome {name} a.k.a {heroName}
     </h1>
     )
    }
}
// in the class component case we use this.props......
export default Welcome