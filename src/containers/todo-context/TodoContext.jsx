import React, { useContext, useReducer, useState } from "react";

import ToDoInput from "../../components/todo-input/todo-input";
import ToDoList from "../../components/todo-list/todo-list";
import Footer from "../../components/footer/footer";

import "./todo.css";
import Title from "../../components/title/title";

import { ctx } from "./CreateContyext";

import reducer, { initialState } from "./reducer";
import { addTask as addToDo } from "../../actions/todoAction";
import { CHANGE_TASK, REMOVE_TASK } from "../../constants";

export default function TodoContext() {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [taskText, setTaskText] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setTaskText(value);
  };
  const addTask = ({ key }) => {
    if (taskText.length > 3 && key === "Enter") {
      dispatch(addToDo(new Date().getTime(), taskText, false));

      setTaskText("");
    }
  };

  const changeTask = (id) => {
    dispatch({
      type: CHANGE_TASK,
      id,
    });
  };

  const removeTask = (id) => {
    dispatch({
      type: REMOVE_TASK,
      id,
    });
  };
  return (
    <>
      <ctx.Provider
        value={{
          title: "New Todo item!",
          tasks,
          removeTask,
          changeTask,
          addTask,
          taskText,
          handleInputChange,
        }}
      >
        <Title />
        <Todo />
      </ctx.Provider>
    </>
  );
}

function Todo() {
  const [activeFilter, setActiveFilter] = useState("all");

  const {
    tasks,
    removeTask,
    changeTask,
    addTask,
    handleInputChange,
    taskText,
  } = useContext(ctx);

  const isTasksExist = tasks && tasks.length > 0;
  const ammount = tasks.filter((item) => !item.isCompleted);
  console.log(tasks, "TAsks");
  return (
    <div className="todo-wrapper">
      <ToDoInput
        onKeyPress={addTask}
        onChange={handleInputChange}
        value={taskText}
      />
      {isTasksExist && (
        <ToDoList
          tasksList={tasks}
          removeTask={removeTask}
          changeTask={changeTask}
        />
      )}
      {isTasksExist && (
        <Footer amount={ammount.length} activeFilter={activeFilter} />
      )}
    </div>
  );
}
