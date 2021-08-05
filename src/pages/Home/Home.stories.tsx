import React from "react";

import { Meta } from "@storybook/react";
import Home from "./Home";
import { NavBar } from "../../components";

export default {
    component: Home,
    title: "HomeScreen"
} as Meta;

export const HomeScreen = ():JSX.Element => {
    return (<body style={{ padding: "0", border: "1px solid black"}}>
            <NavBar />
            <Home />
        </body>)
}