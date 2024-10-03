import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import React from "react";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} p={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
