import React from "react";
import { ComponentMeta } from "@storybook/react";
import Icon from "./Icon";

export default {
    title: "component/Icon",
    component: Icon
} as ComponentMeta<typeof Icon>;

export const SampleIcon = ():JSX.Element => {
    return <Icon type="Logo"/>
}

export const MapIcon = ():JSX.Element => {
    return <Icon type="NomadMap"/>
} 