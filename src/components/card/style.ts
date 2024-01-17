import styled from "styled-components";

export const ServiceOrderList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  li {
    display: flex;
    width: 90%;
    flex-direction: column;
    background-color: lightcyan;
    border-radius: 1.5rem;
    margin: 1.3%;
    align-items: flex-start;
    @media (min-width: 760px) {
      width: 47%;
    }
  }
`;
