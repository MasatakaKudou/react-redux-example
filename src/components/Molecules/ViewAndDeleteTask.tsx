import React from "react";
import Button from "../Atoms/Button";
import Color from "../../styles/Color";
import ListLabel from "../Atoms/ListLabel";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../actions/Tasks/ActionCreator";

type Props = {
  task: string,
  index: number
}

const ViewAndDeleteTask: React.FC<Props> = (props) => {
  const { task, index } = props;
  const dispatch = useDispatch();

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(deleteTask({index}))
  };

  return (
    <div className="siimple--display-flex">
      <ListLabel key={task + index} text={task} />
      <Button
        label="delete"
        onClick={onClick}
        color="white"
        background={Color.Red}
      />
    </div>
  );
};

export default ViewAndDeleteTask;
