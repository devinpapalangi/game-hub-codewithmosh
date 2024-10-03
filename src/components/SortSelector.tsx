import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { SORT_SELECTOR_VALUES } from "../hooks/contants";
import useGameQuery from "../hooks/useGameQuery";

const SortSelector = () => {
  const { gameQuery, setGameQuery } = useGameQuery();
  const getTextLabel = (value: string) => {
    const data = SORT_SELECTOR_VALUES.find((data) => data.value === value);
    if (data) {
      return data.text;
    }
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {getTextLabel(gameQuery.ordering) || "Relevance"}
      </MenuButton>
      <MenuList>
        {SORT_SELECTOR_VALUES.map((data) => (
          <MenuItem
            onClick={() => setGameQuery({ ...gameQuery, ordering: data.value })}
            key={data.value}
            value={data.value}
          >
            {data.text}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
