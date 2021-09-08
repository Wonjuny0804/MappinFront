import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./Map.module.scss";
declare const kakao: any;

interface placeProps {
  y: number;
  x: number;
  place_name: string;
}

interface MapProps {
  searchKeyWord?: string;
  width?: string;
  height?: string;
  className?: string;
}

function Map({ searchKeyWord, width, height, className }: MapProps) {

  useEffect(() => {
    kakao.maps.load(() => {
      const container = document.getElementById("map");

      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new kakao.maps.Map(container, options);
      const infowindow = new kakao.maps.InfoWindow({zIndex:1});
      
      const displayMarker = (place: placeProps) => {
          
        const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x) 
        });

        kakao.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        })
      }

      // 키워드 검색 완료 시 호출되는 콜백함수 입니다
      const placesSearchCB  = (data: Array<placeProps>, status: string) => {
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
      // if (searchKeyWord) {
      //   // 장소 검색 객체를 생성합니다
      //   // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
      //   console.dir(kakao)
  
      // }
        const places = new kakao.maps.services.Places(); 

        // 키워드로 장소를 검색합니다
        places.keywordSearch('이태원 맛집', placesSearchCB); 

      }
    });
  }, [searchKeyWord]);

  // useEffect(() => {
  //   if (!searchKeyWord) return;

  //   kakao.map.load(() => {
  //     const container = document.getElementById("map");

  //     const
  //   });


  // }, [searchKeyWord])

  return <div 
          id="map" 
          style={{ width: width, height: height }} 
          className={className ? classNames(styles.mapDefault, className) : styles.mapDefault}>
          </div>;
}

export default Map;
