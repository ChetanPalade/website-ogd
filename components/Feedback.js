import { useState } from "react";
import { Input, Button, VStack, Textarea } from "@chakra-ui/react";
const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const submitFeedback = () => {
    alert("Feedback submitted! Thank you.");
    setFeedback("");
  };
  return (
    <VStack spacing={4} p={4}>
      <Textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Your feedback..." />
      <Button onClick={submitFeedback} colorScheme="green">Submit Feedback</Button>
    </VStack>
  );
};
export default Feedback;
