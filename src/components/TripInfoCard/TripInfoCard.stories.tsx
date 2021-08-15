import React from "react";
import { ComponentMeta } from "@storybook/react";
import TripInfoCard from "./TripInfoCard";

export default {
    title: "component/TripInfoCard",
    component: TripInfoCard
} as ComponentMeta<typeof TripInfoCard>;

export const SampleCard = ():JSX.Element => {
    const imageURL = "https://images.unsplash.com/photo-1595737361672-ae84c6ca2298?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80";
    const startDate = new Date("2021-06-17");
    const endDate = new Date("2021-06-21");
    return <TripInfoCard imageURL={imageURL} title="제주도 서귀포시, 애월" startDate={startDate} endDate={endDate}/>
}