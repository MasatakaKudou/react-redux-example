import TasksState from "../states/Tasks";
import TasksAction from "../actions/Tasks/Action";
import TasksActionType from "../actions/Tasks/ActionType";

const initialState: TasksState = [];

export default (state: TasksState = initialState, action: TasksAction): TasksState => {
  switch (action.type) {
    case TasksActionType.ADD_TASK:
      return [
        ...state,
        action.payload
      ]
    case TasksActionType.DELETE_TASK:
      return state.filter(todo => todo !== action.type)
    default:
      return state
  }
} 