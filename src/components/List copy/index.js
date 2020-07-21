import React from "react";
import { MdAdd } from "react-icons/md";
import { Container } from "./styles";
import Card from "../Card";
import { Droppable } from "react-beautiful-dnd";

function List({ data }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button>
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>
      <Droppable droppableId={data.title}>
        {(provided, snapshot) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            snapshot={snapshot}
          >
            {data.cards.map((card, index) => (
              <Card key={card.id} data={card} index={index} />
            ))}
          </ul>
        )}
      </Droppable>
    </Container>
  );
}

export default List;
