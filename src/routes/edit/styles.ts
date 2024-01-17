import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 760px) {
    width: 50rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 16px;
  align-self: center;
`;

export const PageContent = styled.div`
  background-color: #f8f8f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 8px;
  }

  h4 {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 8px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
