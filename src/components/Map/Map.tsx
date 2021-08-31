import React, { useState, useEffect } from "react";
declare const kakao: any;

interface placeProps {
  y: number;
  x: number;
  place_name: string;
}

interface MapProps {
  searchKeyWord?: string;
}

function Map({searchKeyWord}: MapProps) {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    kakao.maps.load(() => {
      const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      // console.log(container);
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };

      const map = new kakao.maps.Map(container, options);
      // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
      const infowindow = new kakao.maps.InfoWindow({zIndex:1});

      // 지도에 마커를 표시하는 함수입니다
      function displayMarker(place: placeProps) {
          
        // 마커를 생성하고 지도에 표시합니다
        const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x) 
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        })
      }

      // 키워드 검색 완료 시 호출되는 콜백함수 입니다
      function placesSearchCB (data: Array<placeProps>, status: string) {
        if (status === kakao.maps.services.Status.OK) {

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new kakao.maps.LatLngBounds();

            for (var i=0; i<data.length; i++) {
                displayMarker(data[i]);    
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }       

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
        } 
    }

      if (searchKeyWord) {
        // 장소 검색 객체를 생성합니다
        var ps = new kakao.maps.services.Places(); 

        // 키워드로 장소를 검색합니다
        ps.keywordSearch('이태원 맛집', placesSearchCB); 

      }
    });
  }, [loaded, searchKeyWord]);

  // useEffect(() => {
  //   if (!searchKeyWord) return;

  //   kakao.map.load(() => {
  //     const container = document.getElementById("map");

  //     const
  //   });


  // }, [searchKeyWord])

  return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
}

export default Map;
