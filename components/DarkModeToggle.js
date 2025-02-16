import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Dark Mode"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      size="lg"
      variant="ghost"
      colorScheme="yellow"
      _hover={{ bg: "yellow.200" }}
    />
  );
};

export default DarkModeToggle;



// import { IconButton } from "@chakra-ui/react";
// import { SunIcon, MoonIcon } from "@chakra-ui/icons";
// import { useDarkMode } from "../context/DarkModeContext";

// const DarkModeToggle = () => {
//   const { colorMode, toggleColorMode } = useDarkMode();
//   return (
//     <IconButton icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
//   );
// };
// export default DarkModeToggle;