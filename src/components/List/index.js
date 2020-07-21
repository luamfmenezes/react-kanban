import React from "react";
import { MdAdd } from "react-icons/md";
import { Container, SolidBlock } from "./styles";
import Card from "../Card";
import { Droppable } from "react-beautiful-dnd";

function List({ data }) {
  return (
    <Droppable droppableId={data.title}>
      {(provided, snapshot) => (
        <Container
          done={data.done}
          {...provided.droppableProps}
          ref={provided.innerRef}
          snapshot={snapshot}
        >
          <header>
            <h2>{data.title}</h2>
            {data.creatable && (
              <button>
                <MdAdd size={24} color="#fff" />
              </button>
            )}
          </header>
          <ul>
            {data.cards.map((card, index) => (
              <Card key={data.title + card.id} data={card} index={index} />
            ))}
          </ul>
        </Container>
      )}
    </Droppable>
  );
}

export default List;
