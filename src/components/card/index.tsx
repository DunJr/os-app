/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { iServiceOrder } from "./types";
import { ServiceOrderList } from "./style";

interface CardProps {
  orders: iServiceOrder[];
}

export const Card: React.FC<CardProps> = ({ orders }) => {
  return (
    <>
      <ServiceOrderList>
        {orders?.map((order: iServiceOrder) => (
          <li key={order.id}>
            <p>Id: {order.id}</p>
            <p>Nome do cliente: {order.customername}</p>
            <p>Data da compra: {order.purchasedate}</p>
            <p>Contato do cliente: {order.customerphone}</p>
            <p>
              DP olho Esquerdo/Direito: {order.olhoesquerdodp}/
              {order.olhodireitodp}
            </p>
            <p>
              Longe - Olho Direito - Esferico/Cilindro/Eixo:{" "}
              {order.longeodesferico}/{order.longeodcilindro}/
              {order.longeodeixo}
            </p>
            <p>
              Longe - Olho Esquerdo - Esferico/Cilindro/Eixo:{" "}
              {order.longeoeesferico}/{order.longeoecilindro}/
              {order.longeoeeixo}
            </p>
            <p>
              Perto - Olho Direito - Esferico/Cilindro/Eixo:{" "}
              {order.pertoodesferico}/{order.pertoodcilindro}/
              {order.pertoodeixo}
            </p>
            <p>
              Perto - Olho Esquerdo - Esferico/Cilindro/Eixo:{" "}
              {order.pertooeesferico}/{order.pertooecilindro}/
              {order.pertooeeixo}
            </p>
            <p>Adição - Olho Esquerdo/Direito: {order.addesquerdo}</p>
            <p>Tratamentos: {order.tratamentoslentes}</p>
            <p>Observações: {order.obs}</p>
          </li>
        ))}
      </ServiceOrderList>
    </>
  );
};
