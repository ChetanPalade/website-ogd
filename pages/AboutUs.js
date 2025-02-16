
import { Box, Container, Heading, Text, VStack, Image, Flex } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box id="about" py={10} bg="gray.100">
      <Container maxW="container.lg">
        <VStack spacing={6} textAlign="center">
          <Heading 
            size="xl" 
            bgGradient="linear(to-r, orange.400, yellow.400)" 
            bgClip="text"
          >
            About Us
          </Heading>
          <Text fontSize="lg" color="gray.700" maxW="800px">
            YellowSense Technologies is dedicated to revolutionizing multilingual governance through AI-driven solutions. 
            Our platform ensures seamless communication, accessibility, and efficiency in governance for diverse communities. 
          </Text>
          <Flex 
            flexDirection={{ base: "column", md: "row" }} 
            alignItems="center" 
            gap={8} 
            wrap="wrap" 
            mt={6}
          >
            <Image 
              //src="/images/about.webp" 
              alt="AI-driven multilingual governance in action" 
              borderRadius="20px" 
              boxShadow="lg" 
              maxW={{ base: "100%", md: "400px" }} 
              loading="lazy" 
            />
            <VStack align="start" textAlign="left" spacing={4}>
              <Heading size="md" color="gray.800">Our Mission</Heading>
              <Text color="gray.700">
                To bridge the communication gap in governance through AI-powered translation and accessibility tools, 
                empowering citizens and officials alike.
              </Text>
              <Heading size="md" color="gray.800">Our Vision</Heading>
              <Text color="gray.700">
                A future where language barriers no longer hinder effective governance, ensuring transparency and inclusivity for all.
              </Text>
            </VStack>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutUs;
// import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";

// const AboutUs = () => {
//   return (
//     <Box bg="#FFF9C4" py={10}>
//       <Container maxW="container.lg">
//         <VStack spacing={6} textAlign="center">
//           <Heading size="xl" color="blue.700">
//             About Us
//           </Heading>
//           <Text fontSize="lg" color="gray.700" maxW="800px">
//             YelloVoiceBot is an AI-driven multilingual governance platform designed to enhance public service 
//             accessibility. Leveraging Gen-AI and Bhashini, we provide seamless, voice-powered assistance 
//             for government schemes and subsidies. Our mission is to bridge language barriers and 
//             ensure inclusive governance for all citizens.
//           </Text>
//           <Text fontSize="md" color="gray.600" maxW="700px">
//             With a user-friendly interface and cutting-edge AI technology, we empower individuals to 
//             access critical information effortlessly, ensuring a smoother interaction with public services.
//           </Text>
//         </VStack>
//       </Container>
//     </Box>
//   );
// };

// export default AboutUs;
