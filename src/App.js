import React from 'react'
import {useState} from 'react'
import NavBar from './Components/NavBar';
import InfoPanel from './Components/InfoPanel'
import FootNav from './Components/FootNav'

function App() {

  const screenConfig = useState(0);

  return (
    <div className="App">
      <NavBar />
      <InfoPanel currentScreen={screenConfig}/>
      <FootNav screenConfig={screenConfig}/>
    </div>
  );
}

export default App;