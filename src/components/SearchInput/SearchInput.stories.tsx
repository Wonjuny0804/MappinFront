import React from "react";
import { ComponentMeta } from "@storybook/react";
import SearchInput from "./SearchInput";
import Icon from "../Icon/Icon";

export default {
  title: "component/Input",
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

export const SampleInput = (): JSX.Element => {
  return (
    <SearchInput
      id="searchInput"
      name="search"
      type="search"
      secondary={false}
      icon={<Icon type="Search" />}
    />
  );
};
