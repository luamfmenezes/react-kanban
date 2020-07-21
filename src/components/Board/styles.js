import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  height: calc(100% - 80px);
`;

export const Trash = styled.div`
  width: ${(props) => (props.isDraggingOver ? 260 : 64)}px;
  height: ${(props) => (props.isDraggingOver ? 180 : 64)}px;
  position: absolute;
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
