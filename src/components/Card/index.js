import React from "react";

import { Container, Label } from "./styles";
import { Draggable } from "react-beautiful-dnd";

function Card({ data, index }) {
  return (
    <Draggable draggableId={"" + data.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <header>
            {data.labels.map((label) => (
              <Label color={label} />
            ))}
          </header>
          <p>{data.content}</p>
          {data.user && (
            <img
              src={`https://api.adorable.io/avatars/285/${data.user}.png`}
              alt="profile"
            />
          )}
        </Container>
      )}
    </Draggable>
  );
}

export default Card;
