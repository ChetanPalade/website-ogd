import { useState, useRef } from "react";
import { Button, VStack, HStack, Text, Box, Spinner, Select } from "@chakra-ui/react";
import { database, ref, set } from "../utils/firebase"; // ✅ Correct import

const ChatInterface = () => {
  const [audioData, setAudioData] = useState(null);
  const [recording, setRecording] = useState(false);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [language, setLanguage] = useState("en");

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const mediaStreamRef = useRef(null); // Added stream reference for cleanup

  const startRecording = async () => {
    try {
      setRecording(true);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream; // Store the stream for cleanup
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = () => {
          // Extract the Base64 string from the Data URL
          setAudioData(reader.result.split(",")[1]);
        };
      };

      mediaRecorder.start();
    } catch (err) {
      console.error("Error starting recording:", err);
      setError("Failed to start recording.");
      setRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaStreamRef.current?.getTracks().forEach(track => track.stop()); // Cleanup the stream
      setRecording(false);
    }
  };
  const handleUpload = async (audioData, language) => {
    try {
      const audioRef = ref(database, "audioData/" + Date.now()); // ✅ Now it will work
      await set(audioRef, {
        audio: audioData,
        language,
      });
  
      console.log("Audio data uploaded successfully!");
    } catch (error) {
      console.error("Error uploading audio data:", error);
    }
  };

  const handleQuery = async () => {
    if (!audioData) return;
    setLoading(true);
    setError("");
    setResponse("");

    try {
      // Upload audio data to Firebase Realtime Database
      const audioRef = ref(database, "audioData/" + Date.now()); // Use current timestamp as a unique ID
      await set(audioRef, {
        audio: audioData,
        language,
        timestamp: Date.now(),
      });

      // Mock response from Firebase (for this example)
      setResponse("Audio data uploaded successfully!");
    } catch (err) {
      console.error("Error sending audio:", err);
      setError(err.message || "Failed to send audio.");
    }

    setLoading(false);
  };

  return (
    <VStack spacing={4}>
      <HStack>
        <Button onClick={startRecording} colorScheme="red" isDisabled={recording}>
          🎤 Start Recording
        </Button>
        <Button onClick={stopRecording} colorScheme="blue" isDisabled={!recording}>
          ⏹ Stop Recording
        </Button>
      </HStack>

      <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="es">Spanish</option>
      </Select>

      <Button onClick={handleQuery} colorScheme="green" isDisabled={!audioData || loading}>
        🚀 Send Audio
      </Button>

      {loading && <Spinner />}
      {error && <Text color="red.500">{error}</Text>}
      {response && (
        <Box p={4} bg="gray.100" borderRadius="md">
          {response}
        </Box>
      )}
    </VStack>
  );
};

export default ChatInterface;


// import { useState, useRef } from "react";
// import { Button, Select, Textarea, VStack, Heading } from "@chakra-ui/react";

// const ChatInterface= () => {
//     const [language, setLanguage] = useState("English");
//     const [audioBase64, setAudioBase64] = useState("");
//     const [responseMessage, setResponseMessage] = useState("");
//     const mediaRecorderRef = useRef(null);
//     const audioChunksRef = useRef([]);

//     const startRecording = async () => {
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//             mediaRecorderRef.current = new MediaRecorder(stream);
//             audioChunksRef.current = [];
            
//             mediaRecorderRef.current.ondataavailable = event => {
//                 audioChunksRef.current.push(event.data);
//             };
            
//             mediaRecorderRef.current.onstop = async () => {
//                 const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
//                 const reader = new FileReader();
//                 reader.onloadend = () => {
//                     setAudioBase64(reader.result.split(",")[1]);
//                 };
//                 reader.readAsDataURL(audioBlob);
//             };
            
//             mediaRecorderRef.current.start();
//         } catch (err) {
//             alert("Error accessing microphone: " + err.message);
//         }
//     };

//     const stopRecording = () => {
//         if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
//             mediaRecorderRef.current.stop();
//         }
//     };

//     const sendAudioData = async () => {
//         if (!audioBase64) {
//             alert("No audio recorded!");
//             return;
//         }

//         try {
//             const response = await fetch("/api/process-audio", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ language, audioBase64 })
//             });
//             const data = await response.text();
//             setResponseMessage(data.trim());
//         } catch (error) {
//             setResponseMessage("Error sending data.");
//         }
//     };

//     return (
//         <VStack spacing={4} p={5} bg="gray.100" borderRadius="md" boxShadow="md" maxW="400px" mx="auto">
//             <Heading size="md">Voice2Govschemeinfo 🎤</Heading>
//             <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
//                 {["English", "Hindi", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu", "Gujarati", "Malayalam", "Punjabi", "Odia", "Kannada", "Maithili"].map((lang) => (
//                     <option key={lang} value={lang}>{lang}</option>
//                 ))}
//             </Select>
//             <Button colorScheme="blue" onClick={startRecording}>🎤 Record</Button>
//             <Button colorScheme="red" onClick={stopRecording}>⏹ Stop</Button>
//             <Button colorScheme="green" onClick={sendAudioData} isDisabled={!audioBase64}>Send</Button>
//             <Textarea placeholder="Response will appear here..." value={responseMessage} readOnly />
//         </VStack>
//     );
// };

// export default ChatInterface;



// "use client"; // Ensure it only runs on the client side

// import { useState, useEffect } from "react";
// import {
//   Input,
//   Button,
//   VStack,
//   Box,
//   Text,
//   Spinner,
//   HStack,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { fetchQueryResponse } from "../utils/api";
// import { useLanguage } from "../context/LanguageContext";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import dynamic from "next/dynamic";
// import "regenerator-runtime/runtime"; // Fix for async/await error

// // Dynamically import motion (Framer Motion) with SSR disabled
// const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
//   ssr: false,
// });

// const ChatInterface = () => {
//   const [query, setQuery] = useState("");
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { language } = useLanguage();
//   const [isClient, setIsClient] = useState(false);

//   // Ensure this runs only after mount
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Use the speech recognition hook
//   const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();

//   useEffect(() => {
//     if (transcript) {
//       setQuery((prev) => (prev ? `${prev} ${transcript}` : transcript)); // Append speech input
//     }
//   }, [transcript]);

//   const handleQuery = async () => {
//     if (!query.trim()) return;
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

//   const startListening = () => {
//     resetTranscript();
//     SpeechRecognition.startListening({ continuous: true });
//   };

//   const stopListening = () => {
//     SpeechRecognition.stopListening();
//   };

//   const inputBg = useColorModeValue("white", "gray.700");
//   const responseBg = useColorModeValue("gray.200", "gray.800");

//   // Wave animation variants
//   const waveVariants = {
//     hidden: { height: 0 },
//     visible: {
//       height: [5, 15, 8, 20, 10], // Different heights for the wave effect
//       transition: {
//         repeat: Infinity,
//         repeatType: "mirror",
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <VStack spacing={4} p={4} w="100%" maxW="600px">
//       <Input
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Ask about government schemes..."
//         bg={inputBg}
//       />

//       {/* Only render speech recognition UI after the component has mounted */}
//       {isClient && browserSupportsSpeechRecognition ? (
//         <VStack spacing={2}>
//           <HStack>
//             <Button onClick={startListening} colorScheme={listening ? "red" : "purple"}>
//               🎙 {listening ? "Listening..." : "Start Voice Query"}
//             </Button>
//             <Button onClick={stopListening} colorScheme="gray">
//               Stop
//             </Button>
//           </HStack>

//           {/* Voice Wave Effect */}
//           {listening && (
//             <HStack spacing={1} alignItems="flex-end">
//               {[1, 2, 3, 4, 5].map((bar) => (
//                 <MotionDiv
//                   key={bar}
//                   variants={waveVariants}
//                   initial="hidden"
//                   animate="visible"
//                   style={{
//                     width: "6px",
//                     height: "20px",
//                     backgroundColor: "purple",
//                     borderRadius: "4px",
//                   }}
//                 />
//               ))}
//             </HStack>
//           )}
//         </VStack>
//       ) : (
//         <Text color="red.400">Speech recognition not supported in this browser.</Text>
//       )}

//       <Button onClick={handleQuery} colorScheme="blue" isLoading={loading}>
//         {loading ? <Spinner size="sm" /> : "Submit"}
//       </Button>

//       {error && <Text color="red.500">{error}</Text>}

//       {response && (
//         <Box p={4} bg={responseBg} borderRadius="md" w="100%">
//           {response}
//         </Box>
//       )}
//     </VStack>
//   );
// };

// export default ChatInterface;


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