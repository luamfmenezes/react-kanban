import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 0.3s ${fadeIn} 0s both;
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0 0 1000px 100px rgba (0, 0, 0, 0.6);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  h1 {
    margin-bottom: 0.5rem;
    font-size: 24px;
    display: flex;
    align-items: center;
  }
  label {
    margin-top: 0.5rem;
  }
  input {
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 250px;
    padding-left: 0.5rem;
  }
  small {
    font-size: 12px;
    background: #7159c1;
    padding: 4px 8px;
    color: #fff;
    border-radius: 4px;
    margin-left: 0.5rem;
  }
`;

export const Colors = styled.div`
  display: flex;
  padding: 1rem 0;
`;

export const Color = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  transition: 0.2s;
  border: 2px solid ${(props) => (props.selected ? "#666" : "transparent")};
  background: ${(props) => props.color};
  cursor: pointer;

  & + div {
    margin-left: 0.5rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  padding-top: 20px;
  margin-top: 4px;
  border-top: 1px solid #ddd;
  justify-content: flex-end;
  align-items: center;
  p {
    color: #777;
    margin-right: 1rem;
    cursor: pointer;
  }
  button {
    background: #3b5bfd;
    height: 40px;
    border: 0px;
    border-radius: 4px;
    color: #fff;
    padding: 0 16px;
    transition: 0.2s;
    & + button {
      margin-left: 0.5rem;
    }
    &:hover {
      filter: brightness(1.2);
    }
  }
`;
