import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import NOjsx from './Components/NOjsx';

function App() {
  return (
    <div className="App">
       <Greet name="yash" heroName = "batman"/>
       <Greet name ="prince" heroName="superman"/>
      {/* <Welcome/> */} 
      {/* <Hello/> */}
      {/* <NOjsx/> */}
    </div>
  );
}

export default App;
