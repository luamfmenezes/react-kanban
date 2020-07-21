import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  /* margin-bottom: 15px; */
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;
  transition: 0.2s;
  ${(props) =>
    props.isDragging &&
    css`
      opacity: 0.8;
    `};

  ${(props) =>
    props.overTrash &&
    css`
      background: #ffaabb;
      p {
        color: #fff;
      }
      div {
        border-color: rgba(255, 255, 255, 0.3) !important;
      }
    `}

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }
  p {
    font-weight: 500;
    line-height: 20px;
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid rgba(0, 0, 20, 0.1);
    img {
      width: 24px;
      height: 24px;
      margin-right: 0.5rem;
      border-radius: 2px;
    }
  }
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${(props) => props.color};
`;
