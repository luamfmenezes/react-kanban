import React from "react";

import { Container, Label } from "./styles";

function Card({ data, snapshot }) {
  return (
    <Container
      isDragging={snapshot.isDragging}
      overTrash={snapshot.draggingOver === "trash"}
    >
      <header>
        <Label color={data.label} />
      </header>
      <p>{data.content}</p>
      {data.user && (
        <div>
          <img
            src={`https://api.adorable.io/avatars/285/${data.user}.png`}
            alt="profile"
          />
          <p>{data.user}</p>
        </div>
      )}
    </Container>
  );
}

export default Card;
