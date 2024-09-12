import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}
const SortSelector: React.FC<Props> = ({
  onSelectSortOrder,
  selectedSortOrder,
}) => {
  const sortSelector = [
    {
      text: "Relevance",
      value: "",
    },
    {
      text: "Date Added ",
      value: "-added",
    },
    {
      text: "Name",
      value: "name",
    },
    {
      text: "Release Date",
      value: "-released ",
    },
    {
      text: "Popularity ",
      value: "-metacritic ",
    },
    {
      text: "Average Rating ",
      value: "-rating ",
    },
  ];

  const getTextLabel = (value: string) => {
    const data = sortSelector.find((data) => data.value === value);
    if (data) {
      return data.text;
    }
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {getTextLabel(selectedSortOrder) || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortSelector.map((data) => (
          <MenuItem
            onClick={() => onSelectSortOrder(data.value)}
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
