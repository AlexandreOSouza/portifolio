import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const FormContext = createContext({
  name: "",
  email: "",
  message: "",
  setName: (value: string) => {},
  setEmail: (value: string) => {},
  setMessage: (value: string) => {},
  cleanForm: () => {},
});

export const FormContextProvider = ({ children }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const cleanForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <FormContext.Provider
      value={{
        name,
        email,
        message,
        setEmail,
        setName,
        setMessage,
        cleanForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);

  return context;
};
