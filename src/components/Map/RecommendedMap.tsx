import React, { useEffect } from "react";
import classNames from "classnames";
import styles from "./Map.module.scss";
import customMarker from "./assets/mappinCustomMarker.png";
import { CustomOverlay } from "components";
import { place, setPlaceAction } from "redux/storage/place";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

declare const kakao: any;

interface MapProps {
  places: any;
  width?: string;
  height?: string;
  className?: string;
}

function RecommendedMap({ places, width, height, className }: MapProps) {
  useEffect(() => {
    kakao.maps.load(() => {
      const container = document.getElementById("recommendedMap");

      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new kakao.maps.Map(container, options);

      places?.places?.forEach((place: place) => {
        const icon = new kakao.maps.MarkerImage(
          customMarker,
          new kakao.maps.Size(52, 69),
          {
            offset: new kakao.maps.Point(12.5, 0),
            alt: "mappin custom marker",
          }
        );

        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.lat, place.lng),
          image: icon,
          clickable: true,
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

export default RecommendedMap;
