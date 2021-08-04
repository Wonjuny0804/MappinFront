import React from "react";
import NavBar from "./NavBar";
import { ComponentMeta } from "@storybook/react";

export default {
    title: "component/NavBar",
    component: NavBar
} as ComponentMeta<typeof NavBar>;

export const SampleNavBar = (): JSX.Element => {
    return <NavBar />
}