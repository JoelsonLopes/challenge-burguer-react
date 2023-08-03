import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import BagBurguer from "../../assets/BagBurguer.svg";
import Trash from "../../assets/Trash.svg";

import { Container, Image, H1, Button, Orders } from "./styles";

const OrdersClients = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3005/orders"
      );

      setOrders(newOrders);
    }

    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3005/orders/${orderId}`);
    const newOrders = orders.filter((order) => order.id !== orderId);
    setOrders(newOrders);
  }

  function goBackPage() {
    navigate("/")
  }

  return (
    <Container>
      <Image alt="Bag-Burguer" src={BagBurguer} />
      <H1>Pedidos🥰</H1>

      <ol>
        {orders.map((order) => (
          <div key={order.id}>
            <div>
              <Orders>
                <div>
                  <p>{order.order}</p>
                  <p>
                    <strong>{order.name}</strong>
                  </p>
                </div>
                <button onClick={() => deleteOrder(order.id)}>
                  <img src={Trash} alt="Lata-de-lixo" />
                </button>
              </Orders>
            </div>
          </div>
        ))}
      </ol>
      <Button onClick={goBackPage}>Voltar</Button>
    </Container>
  );
};

export default OrdersClients;
