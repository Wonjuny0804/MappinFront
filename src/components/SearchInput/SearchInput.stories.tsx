import React from "react";
import { ComponentMeta } from "@storybook/react";
import SearchInput from "./SearchInput";

export default {
    title: "component/SearchInput",
    component: SearchInput
} as ComponentMeta<typeof SearchInput>

export const SampleInput = ():JSX.Element => {
    return <SearchInput />
}