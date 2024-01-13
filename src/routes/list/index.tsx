/* eslint-disable @typescript-eslint/no-unused-vars */
// SearchServiceOrders.tsx
import React, { useEffect, useState } from "react";
import { iServiceOrder } from "../../components/card/types";
import { Card } from "../../components/card";
import { Title } from "./styles.ts";

const API_URL = "https://cadastro-os-cors.onrender.com/serviceOrders?search=";

export const ListServiceOrders: React.FC = () => {
  const [data, setData] = useState<iServiceOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + filter);
        const result = await response.json();
        setData(result);
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
