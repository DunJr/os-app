import React, { useEffect, useState } from "react";
import { iServiceOrder } from "../../components/card/types";
import { Card } from "../../components/card";
import { PageContainer, Title } from "./styles.ts";
import { getToken } from "../../services/authService.ts";
import { Header } from "../../components/header/index.tsx";

const API_URL = "https://cadastro-os-cors.onrender.com/serviceOrders";
export const ListServiceOrders: React.FC = () => {
  const [data, setData] = useState<iServiceOrder[]>([]);
  const [filteredData, setFilteredData] = useState<iServiceOrder[]>([]);
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

        const response = await fetch(`${API_URL}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.error(`Request failed with status ${response.status}`);
          return;
        }

        const responseData = await response.json();

        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    applyFilter(data);
  }, [filter, data]);

  const applyFilter = (orders: iServiceOrder[]) => {
    if (!filter) {
      setFilteredData(orders);
    } else {
      const filteredOrders = orders.filter((order) =>
        order.customername.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredData(filteredOrders);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <PageContainer>
      <Header />
      <div>
        <Title>Consultar Ordens de Serviço</Title>
        <label>Filtro</label>
        <input
          type="text"
          name="FilterCustomerName"
          onChange={handleInputChange}
        />
      </div>
      {loading ? <p>Loading...</p> : <Card orders={filteredData} />}
    </PageContainer>
  );
};
