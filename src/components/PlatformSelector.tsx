import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../types";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform?: number;
}
const PlatformSelector: React.FC<Props> = ({
  onSelectedPlatform,
  selectedPlatform,
}) => {
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatformName = usePlatform(selectedPlatform)?.name;
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformName ? selectedPlatformName : "Platforms"}
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
