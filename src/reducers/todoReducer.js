import { ADD_TASK, REMOVE_TASK,CHANGE_TASK } from "../constants";

const initialState = [
  {
    id: 1,
    text: "Learn ReactJS",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Learn Redux",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Learn React Router",
    isCompleted: false,
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isCompleted: action.isCompleted,
        },
      ];
    case REMOVE_TASK:
      return state.filter(({ id }) => action.id !== id);
    case CHANGE_TASK:
      return state.map((item) => {
        if (item.id === action.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item
      });
    default:
      return state;
  }
}
