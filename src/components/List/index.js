import React from "react";
import { MdAdd } from "react-icons/md";
import { Container } from "./styles";
import Card from "../Card";

function List() {
  return (
    <Container>
      <header>
        <h2>To do</h2>
        <button>
          <MdAdd size={24} color="#fff" />
        </button>
      </header>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}

export default List;
