import React from "react";
import { ComponentMeta } from "@storybook/react";
import Card from "./Card";
import PlaceDetail from "../Content/PlaceDetail";

export default {
  title: "component/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const place = {
  index: 1,
  name: "제주 도립 미술관",
  keywords: ["힐링", "제주도"],
  detail:
    "제주도립미술관은 산중턱에 자리하여 조용하면서도 제주하늘, 한라산과 유채, 억새들이 보기 좋게 어우러진 “제주의 자연”과 함께하는 미술의 열린 공간이다. 산중턱에 자리하여 조용하면서도",
  thumbnail: "https://cdn.jejuwapeople.com/news/photo/202102/51_53_3652.jpg",
};

export const DetailCard = (): JSX.Element => {
  return (
    <Card>
      <PlaceDetail place={place} />
    </Card>
  );
};
