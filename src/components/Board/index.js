import React, { useState } from "react";
import { loadLists } from "../../services/api";
import { Container, Trash } from "./styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { BsTrash } from "react-icons/bs";
import List from "../List";

function Board() {
  const [lists, setLists] = useState(loadLists());

  const handleDragEnd = (result, provided) => {
    const { destination, source } = result;

    if (destination) {
      const selectedCard = lists.find(
        (list) => list.title === source.droppableId
      ).cards[source.index];

      const newLists = lists.map((list) => {
        let newList = list;

        if (newList.title === source.droppableId) {
          delete newList.cards[source.index];
        }

        if (
          newList.title === destination.droppableId &&
          destination.droppableId !== "trash"
        ) {
          newList.cards.splice(destination.index, 0, selectedCard);
        }
        return newList;
      });
      setLists(newLists);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Container>
        {lists.map((list) => (
          <List key={list.title} data={list} />
        ))}
      </Container>
      <Droppable droppableId="trash">
        {(provided, snapshot) => (
          <Trash
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            <BsTrash
              size={32}
              color={snapshot.isDraggingOver ? "#ff7777" : "#7159c1"}
            />
            {provided.placeholder}
          </Trash>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
