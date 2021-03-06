import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Map.module.scss";
import customMarker from "./assets/mappinCustomMarker.png";
import { CustomOverlay } from "components";
import { setPlaceAction } from "redux/storage/place";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewTripAction } from "redux/storage/mytrip";
import { useAppSelector, useAppDispatch } from "../../redux/hook";
import { AddPlace } from "../../redux/features/tripSlice";


declare const kakao: any;
export interface placeProps {
  y: number;
  x: number;
  place_name: string;
  category_group_name: string;
}

interface MapProps {
  searchKeyWord?: string;
  width?: string;
  height?: string;
  className?: string;
  editIndex?: number;
  day?: number;
}

function Map({
  searchKeyWord = "",
  width,
  height,
  className,
  editIndex,
  day,
}: MapProps) {

  const history = useHistory();

  const [error, setError] = useState<boolean>(false);

  const trip = useAppSelector((state) => state.trip);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (kakao) {
      kakao.maps.load(() => {
        const container = document.getElementById("map");
  
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
  
        const map = new kakao.maps.Map(container, options);
  
        const displayMarker = (place: placeProps) => {
          const keywords = [place.category_group_name];
          const customOverlay = CustomOverlay(
            place.place_name,
            handleSelect,
            closeOverlay,
            keywords
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
            }
          );
  
          const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
            image: icon,
            clickable: true,
          });
  
          overlay.setMap(map);
  
          kakao.maps.event.addListener(marker, "click", function () {
            const $overlay = document.querySelector("#customOverlay");
            if ($overlay?.parentElement)
              $overlay.parentElement.style.display = "none";
  
            overlay.setMap(map);
          });
  
          function handleSelect() {
            // ?????? ???????????? 0 ?????? ?????????????????? ?????? false??? ????????????????????? ???????????? ????????? ??????
            
            if (typeof editIndex === "number" && day) {
              dispatch(
                addNewTripAction(editIndex, day, {
                  name: place.place_name,
                  lat: place.y,
                  lng: place.x,
                  keywords: [place.category_group_name],
                })
              );
              history.push({
                pathname: "/my-trip",
                state: { mode: "edit", day },
              });
            } else {
              dispatch(
                AddPlace({
                  id: 1,
                  places: [
                    {
                      lat: place.y, 
                      lng: place.x, 
                      name: place.place_name
                    }
                  ]
                })
              );
              
              history.push({pathname: "/my-trip", state: { mode: "edit", day: day || "1" }});
            }
          }
  
          function closeOverlay() {
            overlay.setMap(null);
          }
        };
  
        const placesSearchCB = (data: Array<placeProps>, status: string) => {
          if (status === kakao.maps.services.Status.OK) {
            const bounds = new kakao.maps.LatLngBounds();
  
            for (let i = 0; i < data.length; i++) {
              if (i > 4) break;
              displayMarker(data[i]);
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
  
            map.setBounds(bounds);
          }
        };
  
        const places = new kakao.maps.services.Places();
  
        places.keywordSearch(searchKeyWord, placesSearchCB);
      });
    } else {
      setError(true);
    }
  }, [dispatch, history, searchKeyWord, error]);

  return (
    error ? 
    <div>Error</div> : 
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
