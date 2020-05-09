import React from "react";
import styled from "styled-components";
import { FontSize, FontFamily } from "../../styles/Font";

type Props = {
  label: string;
  color: "white" | "black";
  background: "red" | "white";
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = (props) => {
  const { label, onClick, color, background } = props;
  return <StyledButton onClick={onClick} color={color} background={background}>{label}</StyledButton>;
};

export default Button;

type StyledButtonProps = {
  background: string,
  color: string
}

const StyledButton = styled.button<StyledButtonProps>(props => `
  font-size: ${FontSize.Medium}px;
  font-family: ${FontFamily.Roboto};
  color: ${props.color};
  background: ${props.background};
  margin: 8px
`);