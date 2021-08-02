import React from 'react';
import './App.css';
import Vaccine from './Components/Vaccine';
import Location from './Components/Location';



function App() {
  return (
    <div className="App">

      <div className="container">
        <div className="frame">
          <h2>💉 코로나 예방접종센터 위치정보 💉 </h2>
          <h5><Vaccine /></h5>
        </div>
        <div className="frame_2">
          <h2>🗺️ 코로나 예방접종센터 맵 🗺️</h2>
          <Location />
        </div>
      </div>

    </div>
  );
}

export default App;
