import React from "react";
import { ComponentMeta } from "@storybook/react";
import RecommendKeyword from "./RecommendKeyword";

export default {
  title: "component/RecommendKeyword",
  component: RecommendKeyword
} as ComponentMeta<typeof RecommendKeyword>;

export const SampleKeyWordCard = ():JSX.Element => {
  const sampleKeywords = ["이호태우 해변", "제주도", "환경", "제주도 오름", "올레길", "한라산"];
  return <RecommendKeyword keywords={sampleKeywords}/>;
}