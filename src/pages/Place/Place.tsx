import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon, PageNav } from "../../components";
import Map from "../../components/Map/Map";
import styles from "./Place.module.scss";
import commonStyles from "../../styles/common.module.scss";
import Slider from "react-slick";

function Place() {
  const history = useHistory();
  const slider = useRef<Slider | null>(null);
  const handleOnGoBack = (): void => {
    history.goBack();
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <main className={commonStyles.page}>
      <header className={commonStyles.header}>
        <h1 className={commonStyles.headerTitle}>한라산 국립 공원</h1>
        <div className={commonStyles.headerPhrase}>
          <p>제주시의 대표 국립 공원</p>
        </div>
      </header>
      <section>
        <div className={styles.place}>
          <Slider ref={slider} {...settings} className={styles.slider}>
            <div className={styles.slide}>
              <img
                src="https://s3-alpha-sig.figma.com/img/08d4/0e55/5986b6a979f644cbb0e02f0214b6f54d?Expires=1630886400&Signature=CutrluvCViCfxLRaYMcBp8h9q0XwJKoAar5doVba7fml6Vmc0uo8RAbSmX9ZAac2WkJURHkxZDZHHOjmySw~ufacaQyz6ioUyAiu3kznJPgRi0Cj7uG~FhDRo0Lzempj4jIOjMiwqq~NXERufGTR-voILUy4jICR-aKZFIY3DZ2-WC~Oi441zBoZeBXrBgcD5tjpniothq~AqCQ0~RAjDR~z0Pql-TXTUiUW97Rod8wDyZjtmR5x0LJ~9XGwvUpD0sRPNqMNBLE8hEBSd2mhEtDtCW9X24QEQFxKM~u~Iu650k2gXQDaRZQ~n0~Fqp88UaL~Sh~1~Ck6gjmRyc4ipQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="사진"
                className={styles.image}
              />
            </div>
            <div className={styles.slide}>
              <img
                src="https://s3-alpha-sig.figma.com/img/48e0/ed80/8a96bd090358c353c7fa4d353d3d5537?Expires=1630886400&Signature=dK-5vW03z90SQIItGsgQw61w5a94wNN-NpXN~7gLqYWS51qwZ9Fe3~fGd3Ga-E-iWMgiLYZaiz-cwN9~K2FwpuzFX3UqUYH2QyLlrUtczWnNduFjho7v7PxiEliFqZ5fbuPuI5CaUV0T5iqXWh2A1XmTeO7GjPBKbkTQaSbMv5xN42CfNrhw1VtSPGV7mJGc573mV9M0tUGa~ad7l-uyu-YUuUorinq6j619x-cEkudxWtC4ENDr2WCyxIsbDJH6P4uASZnz3yJnguf3avwSaRO94soPvlVx2A0ZNypwP2cJb6xqktLQAE8Do24FiwwdqiHNWpb8-rOm1AuKbU8Y0w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="사진"
                className={styles.image}
              />
            </div>
            <div className={styles.slide}>
              <img
                src="https://s3-alpha-sig.figma.com/img/7cf0/1158/c07c8efa12183b26d3f4af8d43873c8a?Expires=1630886400&Signature=Xqgb46jCZ8kEmiK8ewJGHXzz5mghwKLqZPlH2RBDwhZRtOr5Pg4tIyp-LLidQBs5avJtcID5Z6THsMUdthyNbspTR3XtzXKHvqv2etZSsO1jpUOWXulxxrkaLpmOwbuQa2N~nMTlpi0NCJg4r8LX91xjblgKmN5H10f0dGmkfuJdWyjVvVJSAq2BOWArf6cOmL0I7oJIrm1gbydwY-aRSUT1FyJOOJNcWM-VlDe72t1~JIz-liBOcjJupSXKeFRIyXmRqQ2jeeT6~qUSOYPtJ7p1W93zMx1zNCbLI-8jcg9C2DTfK-PvUrgk5HiZg5hbrDseh~rqVv3aFEk1i1ur6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="사진"
                className={styles.image}
              />
            </div>
            <div className={styles.slide}>
              <img
                src="https://s3-alpha-sig.figma.com/img/73b9/5d16/d3af4e93cc5da1b4d2a92731c6489b8d?Expires=1630886400&Signature=CPFi3KPatIL7m~xkfTzvpOfRaiBco0GJX3i5PPmG-CnmSE5GX1EHNdoXL-BwtlQbZWum4KNOjxj0MRHRaNae2sUqWKDComFIqsgzubvJHez4r~2o2n9-bXCPtQfHDLX16NnEtYiVEzUKGGNaIMS~qUM5xabKrVTfvOj-1DTGQWj5BmrzDd5fmvFCYY~Rt5IkdAm8VHiaTg~GilTUL-9P5517THTPsXAOHvbhhjfnKFi4h1jGd8rdxhRoGFLoEZf0LJt-YluH~cwTXoj5qoc5q846~CuoGGevLVsEIFCJrcCJv1eMePLQ-lhvctw693n8mcJxZu66Z4ErsRoKZnoJOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="사진"
                className={styles.image}
              />
            </div>
          </Slider>
        </div>
      </section>
      <PageNav prevOnClick={handleOnGoBack} />
    </main>
  );
}

export default Place;
