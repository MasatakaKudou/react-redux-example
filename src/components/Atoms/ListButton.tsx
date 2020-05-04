import React from "react";
import { FontSize, FontFamily } from "../../styles/Font";
import styled from "styled-components";

type Props = {
  fontSize?: FontSize;
};

const ListButton: React.FC<Props> = (props) => {
  const { fontSize = FontSize.Medium } = props;
  return <StyledButton fontSize={fontSize}>削除</StyledButton>;
};

export default ListButton;

type StyledListButtonProps = {
  fontSize: FontSize;
};

const StyledButton = styled.button<StyledListButtonProps>(
  (props) => `
  font-size: ${props.fontSize}px;
  font-family: ${FontFamily.Roboto};
  margin-left: 16px;
  background-color: red;
  color: white;
  border-color: white;
`
);
