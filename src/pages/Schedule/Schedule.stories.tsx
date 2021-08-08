import React from "react";

import { Meta } from "@storybook/react";
import Schedule from "./Schedule";
import { NavBar } from "../../components";

export default {
  component: Schedule,
  title: "Schedule",
} as Meta;

export const ScheduleScreen = (): JSX.Element => {
  return (
    <body
      style={{ minHeight: "100vh", padding: "0", border: "1px solid black" }}
    >
      <NavBar />
      <Schedule />
    </body>
  );
};
