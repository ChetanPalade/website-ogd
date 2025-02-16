import { useState } from "react"; // 
import { Container } from "@chakra-ui/react";
import ChatInterface from "../components/ChatInterface";
import LanguageSelector from "../components/LanguageSelector";
import Feedback from "../components/Feedback";

export default function Home() {
  const [language, setLanguage] = useState(""); //ensure useState is correctly imported

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log("Selected Language:", lang);
  };

  return (
    <Container centerContent>
      {/* Pass handleLanguageChange to LanguageSelector */}
      <LanguageSelector onLanguageChange={handleLanguageChange} />
      <ChatInterface />
      <Feedback />
    </Container>
  );
}
