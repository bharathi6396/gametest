import React from 'react';
import Level1 from '../src/components/Level1'
// import Level2 from '../src/components/Level2';
//import './App.css';



function App() {

  return (
    <div>
      <Level1/>
      <button type="button" onClick={ refreshPage }> <span>Reload</span> </button>
       {/* <Level2/> */}
    </div>
  )
}

export default App