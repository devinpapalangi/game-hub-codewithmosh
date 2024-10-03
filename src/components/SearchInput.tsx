import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuery from "../hooks/useGameQuery";

const SearchInput = () => {
  const { gameQuery, setGameQuery } = useGameQuery();
  const ref = useRef<HTMLInputElement>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ref.current)
      setGameQuery({ ...gameQuery, searchText: ref.current.value });
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games"
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
