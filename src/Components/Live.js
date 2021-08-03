import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Live() {

    const [Live, setLive] = useState("");
    useEffect(() => {
        axios.get("https://api.covid19api.com/live/country/south-korea/status/confirmed/date/2020-01-01T13:13:30Z")
            .then(result => setLive(result))
            .catch(e => console.log(e));
    }, [])

    if (!Live) {
        return <div>
            <h2>정보를 불러오고 있습니다.</h2>
            <h3>잠시만 기다려주세요</h3>
        </div>
    }

    return (
        <div>
            {
                console.log(Live.data[39])
            }
            <div className="board">
                <h4>금일 00 : 00 기준</h4>
                <div className="number">
                    <div className="confirmed"> <span className="topic">확진자</span> <br /> {Live.data[39].Confirmed} 명 <br /></div>
                    <div className="recovered"><span className="topic">완치자</span>   <br />  {Live.data[39].Recovered} 명 <br /></div>
                    <div className="deathed"> <span className="topic">사망자</span> <br />  {Live.data[39].Deaths} 명 <br /> </div>
                </div>
            </div>
        </div>
    )
}
export default Live;