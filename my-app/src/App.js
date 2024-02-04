import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import {ClassComponent, ClassComponent2} from './Components/ClassComponent';
import Click from './Components/Click';

function App() {
  return (
    <div>
      <ClassComponent />
      <ClassComponent2 />
      <FunctionComponent />
      <Click />
    </div>
  );
}

export default App;
