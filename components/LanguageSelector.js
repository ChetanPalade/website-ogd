import { useState } from "react";
import { Select, Box, Text } from "@chakra-ui/react";

const LanguageSelector = ({ onLanguageChange = () => {} }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("");

    const handleChange = (event) => {
        const lang = event.target.value;
        setSelectedLanguage(lang);
        onLanguageChange(lang); // Pass selected language to parent component
    };

    return (
        <Box w="100%" maxW="400px" p={2}>
            <Select
                onChange={handleChange}
                value={selectedLanguage}
                size="lg"
                variant="outline"
                borderColor="gray.300"
                _hover={{ borderColor: "blue.400" }}
                _focus={{ borderColor: "blue.500", boxShadow: "0 0 8px rgba(0, 123, 255, 0.5)" }}
                bg="white"
                boxShadow="sm"
            >
                <option value="" disabled hidden>🌍 Select Language</option>
                {[
                    "Assamese", "Bengali", "Bodo", "Dodri", "English", "Gujarati", "Hindi", "Kannada", "Kashmiri", "Konkani",
                    "Malayalam", "Maithili", "Marathi", "Manipuri", "Nepali", "Odia", "Punjabi", "Sanskrit", "Santali", "Sindi",
                    "Tamil", "Telugu", "Urdu"
                ].map((lang) => (
                    <option key={lang} value={lang}>
                        {lang}
                    </option>
                ))}
            </Select>

            {selectedLanguage && (
                <Text mt={2} fontSize="lg" fontWeight="bold" color="blue.600">
                    Selected Language: {selectedLanguage}
                </Text>
            )}
        </Box>
    );
};

export default LanguageSelector;


// import { useState } from "react";
// import { Select, Box, Text } from "@chakra-ui/react";

// const LanguageSelector = ({ onLanguageChange }) => {
//     const [selectedLanguage, setSelectedLanguage] = useState("");

//     const handleChange = (event) => {
//         const lang = event.target.value;
//         setSelectedLanguage(lang);
//         onLanguageChange(lang); // Pass selected language to parent component
//     };

//     return (
//         <Box w="100%" maxW="400px" p={2}>
//             <Select
//                 onChange={handleChange}
//                 placeholder="🌍 Select Language"
//                 size="lg"
//                 variant="outline"
//                 borderColor="gray.300"
//                 _hover={{ borderColor: "blue.400" }}
//                 _focus={{ borderColor: "blue.500", boxShadow: "0 0 8px rgba(0, 123, 255, 0.5)" }}
//                 bg="white"
//                 boxShadow="sm"
//             >
//                 {[
//                     "Assamese", "Bengali", "Bodo", "Dodri", "English", "Gujarati", "Hindi", "Kannada", "Kashmiri", "Konkani",
//                     "Malayalam", "Maithili", "Marathi", "Manipuri", "Nepali", "Odia", "Punjabi", "Sanskrit", "Santali", "Sindi",
//                     "Tamil", "Telugu", "Urdu"
//                 ].map((lang) => (
//                     <option key={lang} value={lang}>
//                         {lang}
//                     </option>
//                 ))}
//             </Select>

//             {selectedLanguage && (
//                 <Text mt={2} fontSize="lg" fontWeight="bold" color="blue.600">
//                     Selected Language: {selectedLanguage}
//                 </Text>
//             )}
//         </Box>
//     );
// };

// export default LanguageSelector;



// import { Select } from '@chakra-ui/react';

// const LanguageSelector = ({ onChange }) => {
//     return (
//         <Select onChange={onChange} placeholder="Select Language">
//             {['Assamese','Bengali','Bodo','Dodri','English','Gujarati','Hindi','Kannada','Kashmiri','Konkani',
//             'Malayalam','Maithili','Marathi','Manipuri','Nepali','Odia','Punjabi','Sanskrit','Santali','Sindi',
//             'Tamil','Telugu','Urdu'].map(lang => (
//                 <option key={lang} value={lang}>{lang}</option>
//             ))}
//         </Select>
//     );
// };

// export default LanguageSelector;


// import { Select } from "@chakra-ui/react";
// import { useLanguage } from "../context/LanguageContext";
// const LanguageSelector = () => {
//   const { language, changeLanguage } = useLanguage();
//   return (
//     <Select value={language} onChange={(e) => changeLanguage(e.target.value)}>
//       <option value="en">English</option>
//       <option value="hi">Hindi</option>
//       <option value="bn">Bengali</option>
//       <option value="ta">Tamil</option>
//     </Select>
//   );
// };
// export default LanguageSelector;
