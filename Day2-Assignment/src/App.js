
import './App.css';
import CBComponentState from './2-Assignment/CBComponentState';
import FBComponentProps from './2-Assignment/FBComponentProps';
import FBComponentState from './2-Assignment/FBComponentState';

const listOfUsers = [
  {
    name: "George",
    age: 20,
    gender: "Male",
  },
  {
    name: "Binny",
    age: 27,
    gender: "Famale",
  },
]
function App() {
  return (
    <div className="App">
      <FBComponentProps list={listOfUsers} />
      <br></br>
      <br></br>
      <FBComponentState />
      <br></br>
      <br></br>
      <CBComponentState />
    </div>
  );
}

export default App;
