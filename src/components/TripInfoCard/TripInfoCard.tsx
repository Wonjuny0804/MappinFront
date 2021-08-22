import React, { useEffect, useRef } from 'react';
import styles from "./TripInfoCard.module.scss";
import { DateToString } from "../../utils/date";

interface TripInfoCardProps {
    imageURL: string;
    title: string;
    startDate: Date;
    endDate: Date;
}

function TripInfoCard({ imageURL, title, startDate, endDate}: TripInfoCardProps): JSX.Element {

    const divImageSectionRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (divImageSectionRef.current) {
            const $div = divImageSectionRef.current;
            $div.style.backgroundImage = `url(${imageURL})`;
            $div.style.backgroundPosition = "center";
        }
    }, []);

    return (
        <article className={styles.cardWrapper}>
            <div className={styles.image} ref={divImageSectionRef}></div>
            <div className={styles.information}>
                <h1>{title}</h1>
                <p>{DateToString(startDate, endDate)}</p>
            </div>
        </article>
    )
}

export default TripInfoCard
