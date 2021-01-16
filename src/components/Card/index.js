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
            src={`https://ui-avatars.com/api/?background=3399ff&color=ffffff&bold=true&name=${data.user}.png`}
            alt="profile"
          />
          <p>{data.user}</p>
        </div>
      )}
    </Container>
  );
}

export default Card;
