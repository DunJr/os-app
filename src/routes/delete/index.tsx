import React, { useState } from "react";
import { Header } from "../../components/header";
import { Title, FormContainer, Input, Button, PageContent } from "./styles";
import { getToken } from "../../services/authService";

export const DeleteServiceOrder: React.FC = () => {
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

      if (response.ok) {
        console.log("Service order deleted successfully");
        // You can handle success, e.g., redirect to a different page
      } else {
        console.error("Failed to delete service order");
        // Handle the error here
      }
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
        </FormContainer>
      </PageContent>
    </>
  );
};
