import React, { useState, useRef, useEffect } from "react";

import { Container, Content, Colors, Color, Buttons } from "./styles";

function AddCardModal({ close, addCard, list }) {
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const [color, selectColor] = useState("#ff695e");
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        close();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard(list, { id: 34, user, content, labels: [color] });
    close();
  };

  return (
    <Container>
      <Content ref={ref} onSubmit={handleSubmit}>
        <h1>{list}</h1>
        <label>Task</label>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
        <label>Owner</label>
        <input value={user} onChange={(e) => setUser(e.target.value)} />
        <label>Label</label>
        <Colors>
          <Color
            onClick={() => selectColor("#ff695e")}
            color="#ff695e"
            selected={color === "#ff695e"}
          />
          <Color
            onClick={() => selectColor("#6ad9c1")}
            color="#6ad9c1"
            selected={color === "#6ad9c1"}
          />
          <Color
            onClick={() => selectColor("#6ad97b")}
            color="#6ad97b"
            selected={color === "#6ad97b"}
          />
          <Color
            onClick={() => selectColor("#6a70d9")}
            color="#6a70d9"
            selected={color === "#6a70d9"}
          />
          <Color
            onClick={() => selectColor("#f0ee6c")}
            color="#f0ee6c"
            selected={color === "#f0ee6c"}
          />
        </Colors>
        <Buttons>
          <button type="button" onClick={close}>
            Cancel
          </button>
          <button type="submit">New List</button>
        </Buttons>
      </Content>
    </Container>
  );
}

export default AddCardModal;
