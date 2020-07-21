import React from "react";
import { MdAdd } from "react-icons/md";
import { Container } from "./styles";
import Card from "../Card";
import { Droppable, Draggable } from "react-beautiful-dnd";

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
        {(provided, snapshotDrop) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {data.cards.map((card, index) => (
              <Draggable draggableId={`${card.id}`} key={card.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card data={card} snapshot={snapshot} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </Container>
  );
}

export default List;
