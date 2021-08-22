import React from "react";
import { ComponentMeta } from "@storybook/react";
import Map from "./Map";

export default {
  title: "component/Map",
  compoenent: Map
} as ComponentMeta<typeof Map>;

export const SampleMap = ():JSX.Element => {
  return <Map />
}