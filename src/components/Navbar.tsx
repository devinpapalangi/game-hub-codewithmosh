import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import React from "react";
interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar: React.FC<Props> = ({ onSearch }) => {
  return (
    <HStack justifyContent={"space-between"} p={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
