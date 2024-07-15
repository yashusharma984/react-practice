import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import NOjsx from './Components/NOjsx';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './EventHandling/FunctionClick';
import Classclick from './EventHandling/Classclick';
import EventBind from './Binding Event Handler/EventBind';
import ParentComponent from './Methods as Props/ParentComponent';
import ChildComponent from './Methods as Props/ChildComponent';

function App() {
  return (
    <div className="App">
       {/* <Greet name="yash" heroName = "batman" >
        <p>This is children props</p>
       </Greet>
       <Greet name ="prince" heroName="superman">
        <button>Action</button>
       </Greet> 
      <Welcome name = "krish" heroName= "pokemon"/> 
      <Welcome name = "vijay" heroName="pikachu"/> */}
      {/* <Counter/>
      <Message/>
      <Greet name ="prince" heroName="superman"/>
      <Welcome name = "krish" heroName= "pokemon"/>  */}
      {/* <FunctionClick/>
      <Classclick/>
      <EventBind/> */}
      <ParentComponent/>

      {/* <Hello/> */}
      {/* <NOjsx/> */}
    </div>
  );
}

export default App;
