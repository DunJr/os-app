/* eslint-disable @typescript-eslint/no-unused-vars */
// SearchServiceOrders.tsx
import React, { useEffect, useState } from "react";
import { iServiceOrder } from "../../components/card/types";
import { Card } from "../../components/card";
import { Title } from "./styles.ts";
import { getToken } from "../../services/authService.ts";

const API_URL = "https://cadastro-os-cors.onrender.com/serviceOrders?search=";
export const ListServiceOrders: React.FC = () => {
  const [data, setData] = useState<iServiceOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();

        if (!token) {
          console.error("Token not available. Redirect to login.");
          return;
        }

        const response = await fetch(`${API_URL}${filter ? filter : ""}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.error(`Request failed with status ${response.status}`);
          return;
        }

        const responseData = await response.json();
        console.log(responseData);

        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <Title>Ordens de serviço</Title>
      <div>
        <label>Filtro</label>
        <input
          type="text"
          name="FilterCustomerName"
          onChange={handleInputChange}
        />
      </div>
      {loading ? <p>Loading...</p> : <Card orders={data} />}
    </div>
  );
};
