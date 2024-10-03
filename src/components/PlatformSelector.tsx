import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import useGameQuery from "../hooks/useGameQuery";

const PlatformSelector = () => {
  const { gameQuery, setGameQuery } = useGameQuery();
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatformName = usePlatform(gameQuery.platformId)?.name;
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformName ? selectedPlatformName : "Platforms"}
      </MenuButton>
      <MenuList>
        {isLoading && <MenuItem>Loading...</MenuItem>}
        {data?.results.map((data) => (
          <MenuItem
            onClick={() => setGameQuery({ ...gameQuery, platformId: data.id })}
            key={data.id}
          >
            {data.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
