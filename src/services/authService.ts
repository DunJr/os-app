import axios from "axios";

const API_URL = "https://cadastro-os-cors.onrender.com"; // Replace with your server URL

export const Loginauth = async (
  username: string,
  password: string
): Promise<string | null> => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("authToken", token);
    return token;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login failed:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    return null;
  }
};

export const logout = (): void => {
  localStorage.removeItem("authToken");
};

export const getToken = (): string | null => {
  return localStorage.getItem("authToken");
};
