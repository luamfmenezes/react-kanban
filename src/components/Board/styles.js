import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  height: calc(100% - 80px);
`;

export const Trash = styled.div`
  width: 64px;
  height: 64px;
  position: fixed;
  bottom: 32px;
  right: 32px;
  border: 1px solid
    ${(props) => (props.isDraggingOver ? "#ff7777" : "rgba(0,0,0,0.05)")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  transition: 0.2s;
`;
