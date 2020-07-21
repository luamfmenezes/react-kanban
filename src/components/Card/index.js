import React from "react";

import { Container, Label } from "./styles";

function Card({ data, snapshot }) {
  return (
    <Container
      isDragging={snapshot.isDragging}
      overTrash={snapshot.draggingOver === "trash"}
    >
      <header>
        {data.labels.map((label) => (
          <Label color={label} key={data.id + ":" + label} />
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
  );
}

export default Card;
