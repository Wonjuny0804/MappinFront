import React from "react";
import { ComponentMeta } from "@storybook/react";
import Input from "./Input";
import Icon from "../Icon/Icon";

export default {
  title: "component/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const SampleInput = (): JSX.Element => {
  return (
    <Input
      id="searchInput"
      name="search"
      type="search"
      icon={<Icon type="Search" />}
    />
  );
};
