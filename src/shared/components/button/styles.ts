import styled from "styled-components";
import { ButtonProps } from "../../interfaces/button.props.interface";
import "../../styles/variables.css";

export const CustomButton = styled.button`
  padding: 16px;
  color: ${(props: ButtonProps) => (props.primary ? "white" : "#00558D")};
  background-color: ${(props: ButtonProps) => props.primary ? "#00558D" : "white"};
  border-color: ${(props: ButtonProps) => props.primary ? "#00558D" : "white"};
  border: 1px solid;
  border-radius: 4px;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  :hover {
    webkit-animation: blink-2 0.6s both;
    animation: blink-2 0.6s both;
    cursor: pointer;
  }

  @-webkit-keyframes blink-2 {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.5;
    }
  }
  @keyframes blink-2 {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.5;
    }
  }

  :disabled {
    background-color: var(--background-grey);
  }
`;
