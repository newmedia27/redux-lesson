import { ADD_TASK, REMOVE_TASK, CHANGE_TASK } from "../constants";

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id,
});

export const changeTask = (id) => ({
  type: CHANGE_TASK,
  id
});
