import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Atoms/Button";
import { deleteTask } from "../../actions/Tasks/ActionCreator";

const DeleteTask: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return <Button label="delete" onClick={onClick} />;
};

export default DeleteTask;