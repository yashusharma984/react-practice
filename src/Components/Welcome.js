import React , {Component} from "react";
class Welcome extends Component{
    render(){
     return<h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}
// in the class component case we use this.props......
export default Welcome;