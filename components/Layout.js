import { Box, useColorModeValue, Container } from "@chakra-ui/react";
import { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutUs from "../pages/AboutUs";

const Layout = ({ children }) => {
  const aboutUsRef = useRef(null); // Reference to About Us section

  // Function to scroll to About Us
  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dynamic background color
  const bgColor = useColorModeValue("yellow.50", "gray.800");
  const textColor = useColorModeValue("gray.900", "gray.200");

  return (
    <Box bg={bgColor} color={textColor} minH="100vh" transition="background 0.2s ease-in-out">
      <Header onAboutClick={scrollToAboutUs} />
      <Container maxW="6xl" minH="80vh" p={4}>
        {children}
      </Container>
      {/* Attach ref to AboutUs component */}
      <Box ref={aboutUsRef}>
        <AboutUs />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;


// import { Box, useColorModeValue } from "@chakra-ui/react";
// import Header from "./Header";
// import Footer from "./Footer";
// import AboutUs from "./AboutUs";

// const Layout = ({ children }) => {
//   // Dynamic background color based on color mode
//   const bgColor = useColorModeValue("yellow.50", "gray.800");
//   const textColor = useColorModeValue("gray.900", "gray.200");

//   return (
//     <Box bg={bgColor} color={textColor} minH="100vh">
//       <Header />
//       <Box minH="80vh" p={4}>
//         {children}
//       </Box>
//       <AboutUs/>

//       <Footer />
//     </Box>
//   );
// };

// export default Layout;



// import { Box } from "@chakra-ui/react";
// import Header from "./Header";
// import Footer from "./Footer";
// import AboutUs from "./AboutUs";

// const Layout = ({ children }) => {
//   return (
//     <Box>
//       <Header />
//       <Box minH="80vh">{children}</Box>
//       <AboutUs />
//       <Footer />
//     </Box>
//   );
// };
// export default Layout;