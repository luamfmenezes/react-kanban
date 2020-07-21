import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

export const Container = styled.div`
  padding: 0 5px 0 15px;
  height: 100%;
  flex: 0 0 320px;
  /* 
    flex: 0 0 320px;
    same as 
    flex-grow: 0; // if 2 it will grow until 2x the size of the brothers
    flex-shrink:0; // if 2 it will shrink until 2x the size of the brothers
    flex-basis:320px; 
  */
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    align-items: center;
    height: 42px;
    margin-left: 6px;
    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

export const Content = styled(PerfectScrollbar)`
  margin-top: 30px;
  padding-right: 16px;
  height: calc(100% - 64px);
  ul {
    opacity: ${(props) => (props.done === "true" ? 0.6 : 1)};
  }
`;

export const AddCardButton = styled.button`
  width: 300px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  transition: 0.2s;
  border: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #f7f9ff;
  }
  svg {
    margin-left: 0.5rem;
  }
`;
