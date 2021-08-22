import React from "react";
import { ComponentMeta } from "@storybook/react";
import RecommendCard from "./RecommendCard";

export default {
    title: "component/RecommendCard",
    component: RecommendCard
} as ComponentMeta<typeof RecommendCard>;

export const SampleCard = (): JSX.Element => {
    const sampleURL = "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80";
    return <RecommendCard backgroundURL={sampleURL} cardTitle="협재해수욕장"/>
}