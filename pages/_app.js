import { ChakraProvider } from "@chakra-ui/react";
import "regenerator-runtime/runtime";
import theme from "../styles/theme";
import { LanguageProvider } from "../context/LanguageContext";
import Layout from "../components/Layout";
import { DarkModeProvider } from "../context/DarkModeContext";
// import { UserProfileProvider } from "../context/UserProfileContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <DarkModeProvider>
          {/* <UserProfileProvider> */}
            <Layout>
              <Component {...pageProps} />
            </Layout>
          {/* </UserProfileProvider> */}
        </DarkModeProvider>
      </LanguageProvider>
    </ChakraProvider>
  );
}
export default MyApp;


// import { ChakraProvider } from "@chakra-ui/react";
// import theme from "../theme/theme";
// import { LanguageProvider } from "../context/LanguageContext";
// import Layout from "../components/Layout";
// import { DarkModeProvider } from "../context/DarkModeContext";

// function MyApp({ Component, pageProps }) {
//   return (
//     <ChakraProvider theme={theme}>
//       <LanguageProvider>
//         <DarkModeProvider>
//           <Layout>
//             <Component {...pageProps} />
//           </Layout>
//         </DarkModeProvider>
//       </LanguageProvider>
//     </ChakraProvider>
//   );
// }
// export default MyApp;


// import { ChakraProvider } from "@chakra-ui/react";
// import theme from "@/theme/theme";
// import { LanguageProvider } from "@/context/LanguageContext";
// import Layout from "@/components/Layout";

// function MyApp({ Component, pageProps }) {
//   return (
//     <ChakraProvider theme={theme}>
//       <LanguageProvider>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </LanguageProvider>
//     </ChakraProvider>
//   );
// }

// export default MyApp;

// import { ChakraProvider } from "@chakra-ui/react";
// import theme from "../theme/theme";
// import { LanguageProvider } from "../context/LanguageContext";
// import Layout from "../components/Layout";
// import { DarkModeProvider } from "../context/DarkModeContext";

// function MyApp({ Component, pageProps }) {
//   return (
//     <ChakraProvider theme={theme}>
//       <LanguageProvider>
//         <DarkModeProvider>
//           <Layout>
//             <Component {...pageProps} />
//           </Layout>
//         </DarkModeProvider>
//       </LanguageProvider>
//     </ChakraProvider>
//   );
// }
// export default MyApp;


// import { ChakraProvider } from "@chakra-ui/react";
// import theme from "@/theme/theme";
// import { LanguageProvider } from "@/context/LanguageContext";
// import Layout from "@/components/Layout";

// function MyApp({ Component, pageProps }) {
//   return (
//     <ChakraProvider theme={theme}>
//       <LanguageProvider>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </LanguageProvider>
//     </ChakraProvider>
//   );
// }

// export default MyApp;