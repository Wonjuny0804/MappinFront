import React from "react";
import { Meta } from "@storybook/react";
import Search from "./Search";
import { NavBar } from "../../components";

export default {
  component: Search,
  title: "Search",
} as Meta;

export const SearchScreen = (): JSX.Element => {
  return (
  <body
    style={
      { 
        minHeight: "100vh", 
        padding: "0", 
        border: "1px solid black" 
      }}
  >
    <NavBar />
    <Search />
  </body>
  );
}