import React, { useMemo } from "react";
import { MdAdd } from "react-icons/md";
import { Container, Content, AddCardButton } from "./styles";
import Card from "../Card";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { iconLists } from "../../utils/lists";

function List({ data, openAddCardModal }) {
  const Icon = useMemo(() => iconLists[data.title], [data.title, iconLists]);

  return (
    <Container>
      <header>
        <Icon size={20} color="#7159c1" />
        <h2>{data.title}</h2>
      </header>
      <Content done={data.done ? "true" : "false"}>
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
                      <div style={{ paddingBottom: 15 }}>
                        <Card data={card} snapshot={snapshot} />
                      </div>
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
          <MdAdd size={16} color="#777" />
        </AddCardButton>
      </Content>
    </Container>
  );
}

export default List;
