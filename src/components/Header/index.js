import React from "react";

import { Container } from "./styles";

import { BsFilePost } from "react-icons/bs";

function Header() {
  return (
    <Container>
      <BsFilePost size={32} color="#fff" />
      <h1>Kanban</h1>
    </Container>
  );
}

export default Header;
