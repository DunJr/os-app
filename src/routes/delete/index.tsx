import React, { useState } from "react";
import { Header } from "../../components/header";
import { Title, FormContainer, Input, Button, PageContent } from "./styles";
import { getToken } from "../../services/authService";
import { ResponseMessage } from "../add/styles";

export const DeleteServiceOrder: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [id, setId] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handleDeleteRequest = async () => {
    const API_URL = `https://cadastro-os-cors.onrender.com/serviceOrders/${id}`;

    try {
      const token = getToken();

      if (!token) {
        console.error("Token not available. Redirect to login.");
        return;
      }

      const response = await fetch(API_URL, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const responseBody = await response.text();
      const responseData = responseBody ? JSON.parse(responseBody) : null;

      setResponse(JSON.stringify(responseData));

      // Reset response message after a short delay (e.g., 3 seconds)
      setTimeout(() => {
        setResponse(null);
      }, 3000); // Adjust the delay as needed
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <Header />
      <PageContent>
        <Title>Apagar ordem de serviço</Title>
        <FormContainer>
          Id da OS:
          <Input onChange={handleInputChange} type="text" />
          <Button type="button" onClick={handleDeleteRequest}>
            Delete
          </Button>
          {response && (
            <ResponseMessage>Ordem apagada com sucesso</ResponseMessage>
          )}
        </FormContainer>
      </PageContent>
    </>
  );
};
