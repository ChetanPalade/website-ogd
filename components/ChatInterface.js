"use client"; // Ensure it only runs on the client side

import { useState, useEffect } from "react";
import {
  Input,
  Button,
  VStack,
  Box,
  Text,
  Spinner,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { fetchQueryResponse } from "../utils/api";
import { useLanguage } from "../context/LanguageContext";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import dynamic from "next/dynamic";
import "regenerator-runtime/runtime"; // Fix for async/await error

// Dynamically import motion (Framer Motion) with SSR disabled
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
  ssr: false,
});

const ChatInterface = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  // Ensure this runs only after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use the speech recognition hook
  const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setQuery((prev) => (prev ? `${prev} ${transcript}` : transcript)); // Append speech input
    }
  }, [transcript]);

  const handleQuery = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const data = await fetchQueryResponse(query, language);
      setResponse(data);
    } catch (err) {
      console.error("Error fetching response:", err);
      setError("Failed to fetch data. Please try again.");
    }
    setLoading(false);
  };

  const startListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const inputBg = useColorModeValue("white", "gray.700");
  const responseBg = useColorModeValue("gray.200", "gray.800");

  // Wave animation variants
  const waveVariants = {
    hidden: { height: 0 },
    visible: {
      height: [5, 15, 8, 20, 10], // Different heights for the wave effect
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.5,
      },
    },
  };

  return (
    <VStack spacing={4} p={4} w="100%" maxW="600px">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about government schemes..."
        bg={inputBg}
      />

      {/* Only render speech recognition UI after the component has mounted */}
      {isClient && browserSupportsSpeechRecognition ? (
        <VStack spacing={2}>
          <HStack>
            <Button onClick={startListening} colorScheme={listening ? "red" : "purple"}>
              🎙 {listening ? "Listening..." : "Start Voice Query"}
            </Button>
            <Button onClick={stopListening} colorScheme="gray">
              Stop
            </Button>
          </HStack>

          {/* Voice Wave Effect */}
          {listening && (
            <HStack spacing={1} alignItems="flex-end">
              {[1, 2, 3, 4, 5].map((bar) => (
                <MotionDiv
                  key={bar}
                  variants={waveVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    width: "6px",
                    height: "20px",
                    backgroundColor: "purple",
                    borderRadius: "4px",
                  }}
                />
              ))}
            </HStack>
          )}
        </VStack>
      ) : (
        <Text color="red.400">Speech recognition not supported in this browser.</Text>
      )}

      <Button onClick={handleQuery} colorScheme="blue" isLoading={loading}>
        {loading ? <Spinner size="sm" /> : "Submit"}
      </Button>

      {error && <Text color="red.500">{error}</Text>}

      {response && (
        <Box p={4} bg={responseBg} borderRadius="md" w="100%">
          {response}
        </Box>
      )}
    </VStack>
  );
};

export default ChatInterface;


// import { useState, useEffect } from "react";
// import { Input, Button, VStack, Box, Text, Spinner, HStack } from "@chakra-ui/react";
// import { fetchQueryResponse } from "../utils/api";
// import { useLanguage } from "../context/LanguageContext";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import "regenerator-runtime/runtime"; // Fix for async/await error

// const ChatInterface = () => {
//   const [query, setQuery] = useState("");
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const { language } = useLanguage();
//   const { transcript, resetTranscript, listening } = useSpeechRecognition();

//   useEffect(() => {
//     if (transcript) {
//       setQuery(transcript);
//     }
//   }, [transcript]);

//   const handleQuery = async () => {
//     if (!query) return;
//     setLoading(true);
//     setError("");

//     try {
//       const data = await fetchQueryResponse(query, language);
//       setResponse(data);
//     } catch (err) {
//       console.error("Error fetching response:", err);
//       setError("Failed to fetch data. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <VStack spacing={4} p={4} w="100%" maxW="600px">
//       <Input
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Ask about government schemes..."
//       />

//       <HStack>
//         <Button
//           onClick={() => {
//             resetTranscript();
//             SpeechRecognition.startListening();
//           }}
//           colorScheme={listening ? "red" : "purple"}
//         >
//           🎙 {listening ? "Listening..." : "Start Voice Query"}
//         </Button>
//         {listening && (
//           <Box w="40px" h="40px" bg="purple.400" borderRadius="50%" animation="pulse 1.5s infinite alternate" />
//         )}
//       </HStack>

//       <Button onClick={handleQuery} colorScheme="blue" isLoading={loading}>
//         {loading ? <Spinner size="sm" /> : "Submit"}
//       </Button>

//       {error && <Text color="red.500">{error}</Text>}

//       {response && (
//         <Box p={4} bg="gray.200" borderRadius="md" w="100%">
//           {response}
//         </Box>
//       )}
//     </VStack>
//   );
// };

// export default ChatInterface;

// import { useState, useEffect } from "react";
// import { Input, Button, VStack, Box, Text, Spinner } from "@chakra-ui/react";
// import { fetchQueryResponse } from "../utils/api";
// import { useLanguage } from "../context/LanguageContext";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import "regenerator-runtime/runtime"; // Fix for async/await error

// const ChatInterface = () => {
//   const [query, setQuery] = useState("");
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const { language } = useLanguage();
//   const { transcript, resetTranscript, listening } = useSpeechRecognition();

//   useEffect(() => {
//     if (transcript) {
//       setQuery(transcript);
//     }
//   }, [transcript]);

//   const handleQuery = async () => {
//     if (!query) return;
//     setLoading(true);
//     setError("");

//     try {
//       const data = await fetchQueryResponse(query, language);
//       setResponse(data);
//     } catch (err) {
//       console.error("Error fetching response:", err);
//       setError("Failed to fetch data. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <VStack spacing={4} p={4} w="100%" maxW="600px">
//       <Input
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Ask about government schemes..."
//       />

//       <Button
//         onClick={() => {
//           resetTranscript();
//           SpeechRecognition.startListening();
//         }}
//         colorScheme={listening ? "red" : "purple"}
//       >
//         🎙 {listening ? "Listening..." : "Start Voice Query"}
//       </Button>

//       <Button onClick={handleQuery} colorScheme="blue" isLoading={loading}>
//         {loading ? <Spinner size="sm" /> : "Submit"}
//       </Button>

//       {error && <Text color="red.500">{error}</Text>}

//       {response && (
//         <Box p={4} bg="gray.200" borderRadius="md" w="100%">
//           {response}
//         </Box>
//       )}
//     </VStack>
//   );
// };

// export default ChatInterface;

// import { useState } from "react";
// import { Input, Button, VStack, Box } from "@chakra-ui/react";
// import { fetchQueryResponse } from "../utils/api";
// import { useLanguage } from "../context/LanguageContext";
// const ChatInterface = () => {
//   const [query, setQuery] = useState("");
//   const [response, setResponse] = useState(null);
//   const { language } = useLanguage();
//   const handleQuery = async () => {
//     const data = await fetchQueryResponse(query, language);
//     setResponse(data);
//   };
//   return (
//     <VStack spacing={4} p={4}>
//       <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask about government schemes..." />
//       <Button onClick={handleQuery} colorScheme="blue">Submit</Button>
//       {response && <Box p={4} bg="gray.200" borderRadius="md">{response}</Box>}
//     </VStack>
//   );
// };
// export default ChatInterface;



// import { useState } from "react";
// import { Input, Button, VStack, Box } from "@chakra-ui/react";
// import { fetchQueryResponse } from "../utils/api";
// import { useLanguage } from "../context/LanguageContext";

// const ChatInterface = () => {
//   const [query, setQuery] = useState("");
//   const [response, setResponse] = useState(null);
//   const { language } = useLanguage();

//   const handleQuery = async () => {
//     const data = await fetchQueryResponse(query, language);
//     setResponse(data);
//   };

//   return (
//     <VStack spacing={4} p={4}>
//       <Input
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Ask about government schemes..."
//       />
//       <Button onClick={handleQuery} colorScheme="blue">Submit</Button>
//       {response && <Box p={4} bg="gray.200" borderRadius="md">{response}</Box>}
//     </VStack>
//   );
// };
// export default ChatInterface;