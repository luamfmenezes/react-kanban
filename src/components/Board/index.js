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

    const selectedCard = lists.find((list) => list.title === source.droppableId)
      .cards[source.index];

    removeCard(source.droppableId, selectedCard.id);

    const cards = lists.find((list) => list.title === destination.droppableId)
      .cards;

    const cardsInit = cards.slice(0, destination.index);
    const cardsFinish = cards.slice(destination.index, cards.length);

    setCards(destination.droppableId, [
      ...cardsInit,
      selectedCard,
      ...cardsFinish,
    ]);
  };

  const setCards = (listTitle, cards) => {
    setLists((oldLists) =>
      oldLists.map((list) =>
        list.title === listTitle ? { ...list, cards } : list
      )
    );
  };

  const removeCard = (listTitle, id) => {
    setLists((oldLists) =>
      oldLists.map((list) =>
        list.title === listTitle
          ? { ...list, cards: list.cards.filter((card) => card.id !== id) }
          : list
      )
    );
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
          </Trash>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
