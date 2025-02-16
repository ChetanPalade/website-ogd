import "regenerator-runtime/runtime";
import axios from "axios";

export const fetchQueryResponse = async (query, language) => {
  try {
    const response = await axios.post(
      "https://voicetoscheme.eastus.cloudapp.azure.com/process-audio",
      { query, language },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return { error: "Failed to fetch response. Please try again." };
  }
};


// import axios from "axios";
// export const fetchQueryResponse = async (query, language) => {
//   const response = await axios.post("https://voicetoscheme.eastus.cloudapp.azure.com/process-audio", {
//     query,
//     language,
//   });
//   return response.data;
// };
