import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Container, Image, H1, InputLabel, Input, Button } from "./styles";
import LogBurguer from "../../assets/LogBurguer.svg";

const App = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3005/orders",
      {
        order: inputOrder.current.value,
        name: inputName.current.value,
      }
    );

    setOrders([...orders, newOrder]);

    navigate("/AllOrders");
  }

  return (
    <Container>
      <Image alt="Logo-Burguer" src={LogBurguer} />
      <H1>Faça seu pedido!🤤</H1>

      <InputLabel>Pedido:</InputLabel>
      <Input ref={inputOrder} placeholder="Ex: 1 Coca-Cola, 1-X Salada" />
      <InputLabel>Nome do Cliente:</InputLabel>
      <Input ref={inputName} placeholder="Ex: Aurora" />

      <Button onClick={addNewOrder}>Novo Pedido</Button>
    </Container>
  );
};

export default App;
