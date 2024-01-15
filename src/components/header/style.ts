import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #1976d2;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 3rem;
  padding: 1rem;
  margin-left: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const LogoutButton = styled.button`
  background-color: #c62828;
  color: white;
  border: none;
  padding: 1rem 2rem;
  margin-right: 3rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.8rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #87231c;
  }
`;
