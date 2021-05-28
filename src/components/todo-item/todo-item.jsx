import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./todo-item.css";

const ToDoItem = ({ text, isCompleted, removeTask, id, changeTask }) => (
  <li className="todo-item">
    <i
      className={classNames(
        { "mark far fa-check-circle": isCompleted },
        { "mark far fa-circle": !isCompleted }
      )}
      onClick={() => {
        changeTask(id);
      }}
    />
    <span className={isCompleted ? "completed text" : "text"}>{text}</span>
    <i
      className="fas fa-times"
      onClick={() => {
        removeTask(id);
      }}
    />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
};

ToDoItem.defaultProps = {
  text: "",
  isCompleted: false,
  removeTask: () => {},
};

export default ToDoItem;
