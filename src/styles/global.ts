import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
}
    }
    #root{
        margin:0 auto;
    }
    button {
        background-color: transparent;
        border-width: 0;
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        line-height: inherit;
        padding: 0;
      }
 `;

export const ActionButton = styled.button`
  @media (max-width: 400px) {
    background: red;
    color: white;
    font-size: 1.5rem;
    width: 35vh;
    padding: 10% 3%;
    border-radius: 35px;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionHeader = styled.div``;

export const ClueBubble = styled.div``;

export const AnswerSquare = styled.div``;

export const ResultHeader = styled.div``;

export const StatDetailDiv = styled.div``;

export const StatText = styled.div``;
