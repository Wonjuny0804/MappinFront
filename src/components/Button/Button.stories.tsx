import React from "react";
import { ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
    title: "component/Button",
    component: Button
} as ComponentMeta<typeof Button>;

export const SampleButton = (): JSX.Element => {
    return <Button type="button" children="회원가입" secondary={false}/>
}

export const LoginButton = (): JSX.Element => {
    return <Button type="button" children="로그인" secondary={true}/>
}

export const GenerateTravel = (): JSX.Element => {
    return <Button type="button" children="일정 만들기" secondary={false} />
}