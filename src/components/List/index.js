import React from "react";
import { MdAdd } from "react-icons/md";
import { Container, Content, AddCardButton } from "./styles";
import Card from "../Card";
import { Droppable, Draggable } from "react-beautiful-dnd";
import PerfectScrollbar from "react-perfect-scrollbar";

function List({ data, openAddCardModal }) {
  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
      </header>
      <Content done={data.done}>
        <Droppable droppableId={data.title}>
          {(provided, snapshotDrop) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {data.cards.map((card, index) => (
                <Draggable
                  draggableId={`${card.id}`}
                  key={card.id}
                  index={index}
                >
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
        <AddCardButton onClick={() => openAddCardModal(data.title)}>
          new card
          <MdAdd size={20} color="#777" />
        </AddCardButton>
      </Content>
    </Container>
  );
}

export default List;
