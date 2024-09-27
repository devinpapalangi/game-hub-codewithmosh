import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../types";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector: React.FC<Props> = ({
  onSelectedPlatform,
  selectedPlatform,
}) => {
  const { data, error, isLoading } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {isLoading && <MenuItem>Loading...</MenuItem>}
        {data?.results.map((data) => (
          <MenuItem onClick={() => onSelectedPlatform(data)} key={data.id}>
            {data.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
