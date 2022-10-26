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

export const sendContact = async (
  name: string,
  email: string,
  message: string
) => {
  const response = await axios
    .get("/api/send-contact", {
      params: {
        name,
        email,
        message,
      },
    })
    .catch((error: any) => console.error(error));
  return;
};
