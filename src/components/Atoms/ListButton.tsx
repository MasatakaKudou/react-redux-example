import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Atoms/Button";
import { addTask } from "../../actions/Tasks/ActionCreator";

const DeleteTask: React.FC = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState("");

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (index === "") {
      return;
    }
    dispatch(addTask(index));
    setIndex("");
  };

  return <Button label="delete" onClick={onClick} />;
};

export default DeleteTask;
