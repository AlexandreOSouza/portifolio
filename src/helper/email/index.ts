import axios from "axios";

export const sendFeedback = async (message: string, title: string) => {
  const response = await axios
    .get("/api/send-message", {
      params: {
        message,
        title,
      },
    })
    .catch((error: any) => console.error(error));
  return;
};
