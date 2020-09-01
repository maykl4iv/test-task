import React from 'react';

const Second = ({setRoute}) => {

  return (
    <div className="App">
      <h1>Second</h1>
      <button
        onClick={() => setRoute('first')}
      >
        First
      </button>
    </div>
  );
}

export default Second;
