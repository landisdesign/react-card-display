import React from 'react';
import './App.css';

import CardInput from './CardInput';

function App() {

  return (
    <div style={{margin: "1rem"}}>
      <CardInput value='432a 43234' onChange={e => console.log(e.target.value)} />
    </div>
  );
}

export default App;
