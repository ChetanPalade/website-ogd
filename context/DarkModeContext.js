import { createContext, useContext, useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mode, setMode] = useState(colorMode);

  useEffect(() => {
    const savedMode = localStorage.getItem("chakra-ui-color-mode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const handleToggle = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    toggleColorMode();
    localStorage.setItem("chakra-ui-color-mode", newMode);
  };

  return (
    <DarkModeContext.Provider value={{ colorMode: mode, toggleColorMode: handleToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
