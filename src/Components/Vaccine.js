import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Vaccine() {
    const [Vaccine, setVaccine] = useState([""]);
    const [search, setsearch] = useState("");

    useEffect(() => {
        axios.get("https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=512&serviceKey=MLj3NnJ5YgvuVw6%2BXv8grlSWt19FHKrRIoqm%2BlaSR2DJHsqz1YgBCmf51XBJfcOIHC8oYpqUj5jfrqukXuQA1A%3D%3D")
            .then(result => setVaccine(result.data.data))
            .catch(e => console.log(e));
    }, [])

    if (!Vaccine) {
        return <div>
            <h2>정보를 불러오고 있습니다.</h2>
            <h3>잠시만 기다려주세요</h3>
        </div>
    }

    return (
        <div className="info">
            {/*  json 파일에서 경도와 위도 추출 하기 위한 console.log
            {
                Vaccine.map((itmes, index) => {
                    return (
                        console.log({
                            "title": itmes.facilityName,
                            lat: itmes.lat,
                            lng: itmes.lng
                        })
                    )
                })
            } */}
            <input placeholder="기관명 또는 지역을 입력해주세요" type="text" onChange={(e) => {
                setsearch(e.target.value)
            }} value={search} />
            {/* {items} */}


            <ul>
                {
                    Vaccine.map((items, index) => {
                        // return (
                        //     <h2>{address.address}</h2>
                        // )

                        if (search === "") {
                            return null
                        } else if (items.address.toString().toLowerCase().includes(search.toString().toLowerCase())) {
                            return (
                                <p><span>기관명 : </span>{items.facilityName} <span>주소 : </span>{items.address} </p>

                            )
                        }

                    })
                }
            </ul>
        </div>



    )

}

export default Vaccine;
