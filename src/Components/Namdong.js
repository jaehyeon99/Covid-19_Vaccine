import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Namdong() {
    const [namdong, setnamdong] = useState([""]);

    useEffect(() => {
        axios.get("https://api.odcloud.kr/api/15084724/v1/uddi:52b39a59-88ba-4407-a2ec-dc7997521178?page=1&perPage=512&serviceKey=MLj3NnJ5YgvuVw6%2BXv8grlSWt19FHKrRIoqm%2BlaSR2DJHsqz1YgBCmf51XBJfcOIHC8oYpqUj5jfrqukXuQA1A%3D%3D")
            .then(result => setnamdong(result.data.data))
            .catch(e => console.log(e));
    }, [])

    if (!namdong) {
        return <div>
            <h2>정보를 불러오고 있습니다.</h2>
            <h3>잠시만 기다려주세요</h3>
        </div>
    }
    return (
        <>
            {
                console.log(namdong[0])

            }
            <h2>{namdong[0].누적확진자수}</h2>
            <h4>기준 날짜 : {namdong[0].데이터기준일}</h4>
        </>
    )

}

export default Namdong;
