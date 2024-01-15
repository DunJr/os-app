import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, LogoutButton, Logo, Navigation } from "./style";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Implement your logout logic, e.g., clear the token from local storage
    localStorage.removeItem("authToken");

    // Redirect to the login page after logout
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <Logo to="/">Óticas Vera</Logo>
      <Navigation>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </Navigation>
    </HeaderContainer>
  );
};
