import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { Button, Container, FormContainer, Input, Label, Title } from "./style";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Access the navigate function
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://cadastro-os-cors.onrender.com/login",
        {
          username,
          password,
        }
      );

      const token = response.data.token;

      // Store the token in local storage or a secure cookie
      localStorage.setItem("authToken", token);

      // Redirect to the root route after successful login
      navigate("/");
    } catch (error) {
      // Checking the type of 'error' before using it
      if (error instanceof Error) {
        console.error("Error:", error);
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <form>
          <Label>
            Username:
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Label>
          <Label>
            Password:
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          <Button type="button" onClick={handleLogin}>
            Login
          </Button>
        </form>
      </FormContainer>
    </Container>
  );
};
