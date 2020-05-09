import React from "react";
import styled from "styled-components";
import { FontSize, FontFamily } from "../../styles/Font";
import { Margin } from "../../styles/Layout";

type Props = {
  label: string;

  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = (props) => {
  const { label, onClick } = props;
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;

type StyledButtonProps = {
  margin: Margin;
};

const StyledButton = styled.button`
  font-size: ${FontSize.Medium}px;
  font-family: ${FontFamily.Roboto};
  background-color: red;
  color: white;
  margin: 8px;
`