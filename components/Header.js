import { Flex, Heading, Button, Spacer, HStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import DarkModeToggle from "./DarkModeToggle";

const Header = ({ onAboutClick }) => {
  const { t } = useTranslation();

  return (
    <Flex as="header" p={4} bg="yellow.300" color="white" align="center">
      <Heading size="md">{t(" 🎙️YelloVoiceBot")}</Heading>
      <Spacer />
      <HStack spacing={4}>
        <Button variant="ghost" color="white">{t("Home")}</Button>
        <Button variant="ghost" color="white" onClick={onAboutClick}>{t("About")}</Button>
        <Button variant="ghost" color="white">{t("Contact")}</Button>
        <DarkModeToggle />
      </HStack>
    </Flex>
  );
};

export default Header;


// import { Flex, Heading, Button, Spacer, HStack } from "@chakra-ui/react";
// import { useTranslation } from "next-i18next";
// import DarkModeToggle from "./DarkModeToggle";
// import Link from "next/link"; // Import Next.js Link

// const Header = () => {
//   const { t } = useTranslation();

//   return (
//     <Flex as="header" p={4} bg="yellow.300" color="white" align="center">
//       <Heading size="md">{t("YelloVoiceBot")}</Heading>
//       <Spacer />
//       <HStack spacing={4}>
//         <Link href="/" passHref>
//           <Button variant="ghost" color="white">{t("Home")}</Button>
//         </Link>
//         <Link href="/#about-us" passHref> 
//           <Button variant="ghost" color="white">{t("About")}</Button>
//         </Link>
//         <Link href="/contact" passHref>
//           <Button variant="ghost" color="white">{t("Contact")}</Button>
//         </Link>
//         <DarkModeToggle />
//       </HStack>
//     </Flex>
//   );
// };

//export default Header;



// import { Flex, Heading, Button, Spacer, HStack } from "@chakra-ui/react";
// import { useTranslation } from "next-i18next";
// import DarkModeToggle from "./DarkModeToggle";

// const Header = () => {
//   const { t } = useTranslation();

//   return (
//     <Flex as="header" p={4} bg="yellow.300" color="white" align="center">
//       <Heading size="md">{t("YelloVoiceBot")}</Heading>
//       <Spacer />
//       <HStack spacing={4}>
//         <Button variant="ghost" color="white">{t("Home")}</Button>
//         <Button variant="ghost" color="white">{t("About")}</Button>
//         <Button variant="ghost" color="white">{t("Contact")}</Button>
//         <DarkModeToggle />
//       </HStack>
//     </Flex>
//   );
// };

// export default Header;


// import { Flex, Heading } from "@chakra-ui/react";
// import DarkModeToggle from "./DarkModeToggle";
// const Header = () => {
//   return (
//     <Flex as="header" p={4} bg="blue.500" color="white" justifyContent="space-between">
//       <Heading size="md">YelloVoiceBot</Heading>
//       <DarkModeToggle />
//     </Flex>
//   );
// };
// export default Header;


// import { Flex, Heading } from "@chakra-ui/react";

// const Header = () => {
//   return (
//     <Flex as="header" p={4} bg="blue.500" color="white" justifyContent="center">
//       <Heading size="md">AI Governance Platform</Heading>
//     </Flex>
//   );
// };
// export default Header;