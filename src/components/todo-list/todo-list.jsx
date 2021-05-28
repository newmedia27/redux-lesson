import React from "react";
import PropTypes from "prop-types";

import ToDoItem from "../todo-item/todo-item";

import "./todo-list.css";

const ToDoList = ({ tasksList, removeTask, changeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem
        key={id}
        text={text}
        isCompleted={isCompleted}
        removeTask={removeTask}
        id={id}
        changeTask={changeTask}
      />
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
};

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
};

export default ToDoList;
