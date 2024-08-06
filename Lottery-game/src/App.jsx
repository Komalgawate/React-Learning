import './App.css';
import Lottery from './Lottery';
import { sum } from './helper';

function App() {
  let winCondition=(ticket)=>
  {
    return ticket[0]===0;
  };
  return (
    <div className="App">
      <Lottery n={4} winCondition={winCondition} />
    </div>
  );
}

export default App;
