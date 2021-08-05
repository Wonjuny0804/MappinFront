import React from 'react';
import { Icon, Button } from "../../components";
import styles from "./Home.module.scss";

function Home() {
    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>한눈에 지도로 정리하는 여행 일정</h1>
                <div className={styles.headerPhrase}>
                    <p>꼭 여행하고 싶은 한 장소를 선택하면</p>
                    <p>손쉽게 지도 위에 그려지는 여행 계획을 만나보세요.</p>
                </div>
            </header>
            <section className={styles.service}>
                <h2 className={styles.serviceTitle}>장원준님의 여행 일정</h2>
                <div className={styles.trips}>
                    <Icon type="NomadMap"/>
                    <p>여행 일정을 만들어보세요!</p>
                    <Button type="button" children="일정 만들기" secondary={false} styling={styles.button}/>
                </div>
            </section>
        </div>
    )
}

export default Home
