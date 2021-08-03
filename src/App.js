import React from 'react';
import './App.css';
import Vaccine from './Components/Vaccine';
import Location from './Components/Location';
import Live from './Components/Live';



function App() {
  return (
    <div className="App">

      <h1>코로나 예방접종센터 위치정보 알리미</h1>

      <a className="link " href="https://ncvr.kdca.go.kr/"><button>코로나 백신 예약 바로가기 🖲️</button></a>
      <a className="link " href="https://ncvr.kdca.go.kr/"><button>코로나 백신 안내 🖲️</button></a>
      <div className="LiveCovid">
        <Live />
      </div>

      <div className="container">
        <div className="frame">
          <h2>💉 코로나 예방접종센터 위치정보 💉 </h2>
          <h4><Vaccine /></h4>
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
