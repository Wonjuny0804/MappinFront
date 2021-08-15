import React from "react";
import { ComponentMeta } from "@storybook/react";
import Card from "./Card";

export default {
  title: "component/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const NormalCard = (): JSX.Element => {
  return <Card>sample</Card>;
};
