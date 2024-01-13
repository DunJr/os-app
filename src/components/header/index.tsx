import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  LogoutButton,
  NavLink,
  Navigation,
} from "./style";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic, e.g., clear the token from local storage
    localStorage.removeItem("authToken");

    // Redirect to the login page after logout
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <Logo>Your App Name</Logo>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        <NavLink to="/login">Login</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
