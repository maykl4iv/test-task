import React, {useState} from 'react';
import First from './components/First';
import Second from './components/Second';
import './App.css';

function App() {
  const [route, setRoute] = useState('first');

  return (
    <div className="App">
      {
        route === 'first'
        ?
          <First setRoute={setRoute} />
        :
          <Second setRoute={setRoute} />
      }
    </div>
  );
}

export default App;
