import React, { useEffect } from "react";
import classNames from "classnames";
import styles from "./Map.module.scss";
import customMarker from "./assets/mappinCustomMarker.png";
import { CustomOverlay } from "components";
import ReactDOMServer from "react-dom/server";

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

      const displayMarker = (place: placeProps) => {
        const customOverlay = ReactDOMServer.renderToString(
          <CustomOverlay name={place.place_name} />
        );

        const overlay = new kakao.maps.CustomOverlay({
          clickable: true,
          content: customOverlay,
          position: new kakao.maps.LatLng(place.y, place.x),
          zIndex: 9,
        });

        const icon = new kakao.maps.MarkerImage(
          customMarker,
          new kakao.maps.Size(52, 69),
          {
            offset: new kakao.maps.Point(12.5, 0),
            alt: "mappin custom marker",
            // shape: "poly",
            // coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33"
          }
        );

        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
          image: icon,
          clickable: true,
        });

        kakao.maps.event.addListener(marker, "click", function () {
          const $overlay = document.querySelector("#customOverlay");
          if ($overlay?.parentElement)
            $overlay.parentElement.style.display = "none";

          overlay.setMap(map);
        });
      };

      // const displayOverlay = (place: placeProps) => {
      //   const customOverlay = ReactDOMServer.renderToString(<CustomOverlay name={place.place_name} />);

      //   const overlay = new kakao.maps.CustomOverlay({
      //     map,
      //     clickable: true,
      //     content: customOverlay,
      //     position: new kakao.maps.LatLng(place.y, place.x),
      //     zIndex: 9
      //   })
      // }

      const placesSearchCB = (data: Array<placeProps>, status: string) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            // displayOverlay(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          map.setBounds(bounds);
        }
      };

      const places = new kakao.maps.services.Places();

      places.keywordSearch(searchKeyWord, placesSearchCB);
    });
  }, [searchKeyWord]);

  return (
    <div
      id="map"
      style={{ width: width, height: height }}
      className={
        className ? classNames(styles.mapDefault, className) : styles.mapDefault
      }
    ></div>
  );
}

export default Map;
