import { Box, Flex, Text, VStack, HStack, IconButton, Link, useColorModeValue } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import NextLink from "next/link";

const Footer = () => {
  const bgColor = useColorModeValue("yellow.400", "gray.800");
  const textColor = useColorModeValue("white", "gray.300");
  const linkHoverColor = useColorModeValue("gray.100", "gray.400");

  return (
    <Box as="footer" bg={bgColor} color={textColor} py={6} mt={8}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" maxW="1200px" mx="auto" px={6}>
        
        {/* Branding & Info */}
        <VStack align="start" spacing={2}>
          <Text fontSize="lg" fontWeight="bold">AI Governance Platform by YellowSense Technologies</Text>
          <Text fontSize="sm">Empowering governance through AI-driven multilingual support.</Text>
        </VStack>

        {/* Navigation Links */}
        <HStack spacing={6} mt={{ base: 4, md: 0 }}>
          <Link as={NextLink} href="/AboutUs" _hover={{ color: linkHoverColor, textDecoration: "underline" }}>About Us</Link>
          <Link as={NextLink} href="/services" _hover={{ color: linkHoverColor, textDecoration: "underline" }}>Services</Link>
          <Link as={NextLink} href="/contact" _hover={{ color: linkHoverColor, textDecoration: "underline" }}>Contact</Link>
          <Link as={NextLink} href="/privacy-policy" _hover={{ color: linkHoverColor, textDecoration: "underline" }}>Privacy Policy</Link>
        </HStack>

        {/* Social Media Icons */}
        <HStack spacing={4} mt={{ base: 4, md: 0 }}>
          <IconButton as="a" href="https://facebook.com" target="_blank" aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton as="a" href="https://twitter.com" target="_blank" aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton as="a" href="https://linkedin.com" target="_blank" aria-label="LinkedIn" icon={<FaLinkedin />} />
          <IconButton as="a" href="mailto:tech@yellowsense.in" aria-label="Email" icon={<FaEnvelope />} />
        </HStack>
      </Flex>

      {/* Copyright Section */}
      <Box textAlign="center" mt={4} fontSize="sm">
        <Text>&copy; {new Date().getFullYear()} YellowSense Technologies Pvt. Ltd. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;

// import { Box, Flex, Text, Link, VStack, HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   // Dynamic colors based on theme
//   const bgColor = useColorModeValue("blue.500", "gray.900");
//   const textColor = useColorModeValue("white", "gray.300");
//   const linkHoverColor = useColorModeValue("gray.100", "gray.400");

//   return (
//     <Box as="footer" bg="yellow.400" color={textColor} py={6} mt={8}>
//       <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" maxW="1200px" mx="auto" px={6}>
        
//         {/* Left Section: Branding & Info */}
//         <VStack align="start" spacing={2}>
//           <Text fontSize="lg" fontWeight="bold">AI Governance Platform by YellowSense Technologies</Text>
//           <Text fontSize="sm">Empowering governance through AI-driven multilingual support.</Text>
//         </VStack>

//         {/* Center Section: Quick Links */}
//         <HStack spacing={6} mt={{ base: 4, md: 0 }}>
//           <Link href="/AboutUs" _hover={{ color: linkHoverColor }}>About Us</Link>
//           <Link href="/services" _hover={{ color: linkHoverColor }}>Services</Link>
//           <Link href="/contact" _hover={{ color: linkHoverColor }}>Contact</Link>
//           <Link href="/privacy" _hover={{ color: linkHoverColor }}>Privacy Policy</Link>
//         </HStack>

//         {/* Right Section: Social Media Icons */}
//         <HStack spacing={4} mt={{ base: 4, md: 0 }}>
//           <IconButton as="a" href="https://facebook.com" target="_blank" aria-label="Facebook" icon={<FaFacebook />} />
//           <IconButton as="a" href="https://twitter.com" target="_blank" aria-label="Twitter" icon={<FaTwitter />} />
//           <IconButton as="a" href="https://linkedin.com" target="_blank" aria-label="LinkedIn" icon={<FaLinkedin />} />
//           <IconButton as="a" href="mailto:tech@yellowsense.in" aria-label="Email" icon={<FaEnvelope />} />
//         </HStack>
//       </Flex>

//       {/* Copyright Section */}
//       <Box textAlign="center" mt={4} fontSize="sm">
//         <Text>&copy; {new Date().getFullYear()}YellowSense Technologies Pvt.Lmtd. All rights reserved.</Text>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;



// // import { Flex, Text } from "@chakra-ui/react";

// // const Footer = () => {
// //   return (
// //     <Flex as="footer" p={4} bg="blue.500" color="white" justifyContent="center">
// //       <Text>&copy; 2025 AI Governance Platform</Text>
// //     </Flex>
// //   );
// // };
// // export default Footer