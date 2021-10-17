import React, { useEffect } from "react";
import classNames from "classnames";
import styles from "./Map.module.scss";
import customMarker from "./assets/mappinCustomMarker.png";
import { place } from "redux/storage/place";
import "./overlay.scss";

declare const kakao: any;

interface MapProps {
  places: any;
  width?: string;
  height?: string;
  className?: string;
}

function RouteMap({ places, width, height, className }: MapProps) {
  useEffect(() => {
    kakao.maps.load(() => {
      const container = document.getElementById("recommendedMap");

      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new kakao.maps.Map(container, options);

      let linePath;
      let line = new kakao.maps.Polyline();

      places?.forEach((place: place, index: number) => {
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < places.length; i++) {
          bounds.extend(new kakao.maps.LatLng(places[i].lat, places[i].lng));
          if (i !== 0) {
            linePath = [
              new kakao.maps.LatLng(places[i - 1].lat, places[i - 1].lng),
              new kakao.maps.LatLng(places[i].lat, places[i].lng),
            ];
            line.setPath(linePath);

            new kakao.maps.Polyline({
              map: map,
              path: linePath,
              strokeWeight: 3,
              strokeOpacity: 1,
              strokeColor: "$main-color",
              strokeStyle: "dash",
            });
          }
        }

        map.setBounds(bounds);

        new kakao.maps.CustomOverlay({
          map: map,
          content: `<div class="marker"><span>${index + 1}</span></div>`,
          position: new kakao.maps.LatLng(place.lat, place.lng),
          xAnchor: 0.5,
          yAnchor: 1,
          zIndex: 3,
        });
      });
    });
  }, [places]);

  return (
    <div
      id="recommendedMap"
      style={{ width: width, height: height }}
      className={
        className ? classNames(styles.mapDefault, className) : styles.mapDefault
      }
    ></div>
  );
}

export default RouteMap;
