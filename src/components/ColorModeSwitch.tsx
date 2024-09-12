import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <HStack>
      <Switch
        isChecked={isDarkMode}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text whiteSpace={"nowrap"}>{isDarkMode ? "Dark" : "Light"} Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
