import React from "react";
import { ComponentMeta } from "@storybook/react";
import IconButton from "./IconButton";

export default {
    title: "component/IconButton",
    component: IconButton
} as ComponentMeta<typeof IconButton>

export const SampleButton = ():JSX.Element => {
    return <IconButton type="button" icon="Logo"/>
}