/*global kakao */
import React, { useEffect } from 'react';
import { MakerData } from './MakerData';

function Location() {
    useEffect(() => {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.567817, 127.004501), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴







        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        kakao.maps.event.addListener(map, 'zoom_changed', function () {




        });

        const displayMarker = MakerData.forEach((el) => {
            new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(el.lat, el.lng),
                title: el.title,
            });
        });

    }, [])

    return (
        <div>
            <div id="map" style={{ width: "90%", height: "68vh" }}></div>
        </div >

    )
}
export default Location;
