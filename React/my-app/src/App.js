import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import {ClassComponent, ClassComponent2} from './Components/ClassComponent';
import Click from './Components/Click';
import Counter from './Components/Counter';
import withLoader from './Components/withLoader';
import User from './Components/User';

const UserWithLoader = withLoader(User);

function App() {
  return (
    <div>
      <ClassComponent />
      <ClassComponent2 />
      <FunctionComponent />
      <Click />
      <Counter />
      <UserWithLoader />
    </div>
  );
}

export default App;
