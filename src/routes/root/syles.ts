import styled from "styled-components";

export const Container = styled.nav`
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    padding: 0;
    li {
      margin-bottom: 1rem;
    }
  }
`;

export const PageLink = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  background-color: #3498db; /* Button color */
  color: #fff; /* Text color */
  border-radius: 5px;
  border: 2px solid #2980b9; /* Border color */
  cursor: pointer;
  :hover {
    background-color: #2980b9; /* Button color on hover */
    color: #fff; /* Text color on hover */
  }
`;
