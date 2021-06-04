import { ADD_TASK, CHANGE_TASK, REMOVE_TASK } from "../../constants";

export const initialState = [
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
  
  const handle = {
    [ADD_TASK]: (state, action) => [
      ...state,
      {
        id: action.id,
        text: action.text,
        isCompleted: action.isCompleted,
      },
    ],
    [REMOVE_TASK]: (state, action) => state.filter(({ id }) => action.id !== id),
    [CHANGE_TASK]: (state, action) =>
      state.map((item) => {
        if (item.id === action.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      }),
    DEFAULT: (state) => state,
  };
  
  export default function todoReducer(state, action){
    const handler = handle[action.type] || handle.DEFAULT
    return handler(state, action)
  }
